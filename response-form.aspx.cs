using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Web.Mail;
using System.IO;
using System.Collections;

/*
   Page Name: Response Form
 * Created By:  Bina Solanki
 * Created Date:    08/02/2012
 * Page Description:    With submit response Form sending mail to admin
 */

public partial class response_form : System.Web.UI.Page
{
    public general gen = new general();

    #region "Page Load"
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
        }
        txtName.Focus();
    }
    #endregion
   
    #region "Button Sumbit"
    protected void imgbtnSubmit_Click(object sender, ImageClickEventArgs e)
    {
        try
        {
            if (Server.HtmlEncode(Request.Cookies["Code"].Value) != txtVerificationCode.Text.ToString())
            {
                txtVerificationCode.Text = "";
                message("Verification code is invalid.");
                return;
            }
            else
            {
                string strName,strCompany, strEmail, strPhone,strComment  ;

                strName = txtName.Text;
                strCompany = txtCompany.Text;
                strEmail = txtEmail.Text;
                strPhone =  txtPhone.Text;
                strComment = txtComment.Text;
               
                clearControl();
                SendMailSales(strName,strCompany,strEmail,strPhone,strComment);
                ThanksMail(strName, strCompany, strEmail, strPhone, strComment);
            }
        }
        catch (Exception ex)
        {
        }
    }
    #endregion

    #region "Mail Send"
    public void SendMailSales(string strName, string strCompany, string strEmail, string strPhone, string strComment)
    {
        try
        {
            string strbody = "<html><head><body><table>" +
              " <tr><td align =left style=width: 60px><strong>Name :</strong></td><td><span style=font-size: 12pt>" + strName +
              "</span></td></tr>" + " <tr><td align =left style=width: 60px><strong>Company :</strong></td><td><span style=font-size: 12pt>" + strCompany +
              "</span></td></tr>" + " <tr><td align =left style=width: 60px><strong>Email :</strong></td><td><span style=font-size: 12pt>" + strEmail +
              "</span></td></tr>" + " <tr><td align =left style=width: 60px><strong>Phone :</strong></td><td><span style=font-size: 12pt>" + strPhone +
              "</span></td></tr>" + " <tr><td align =left style=width: 60px><strong>Your Comments :</strong></td><td><span style=font-size: 12pt>" + strComment +
              "</span></td></tr>" + " </table></body></head></html>";

            MailMessage objMM = new MailMessage();
            // SmtpMail.SmtpServer = "mail.corpnet.co.in";
            SmtpMail.SmtpServer = "mail.agilepartners.ca";
            //smtp.secureserver.net
            //objMM.From = "bina.solanki@bytetechnosys.com";
            objMM.To = "sales@agilepartnersinc.com";
               
            //objMM.From = "dushyant.patel@bytetechnosys.com";
            objMM.From = strEmail;
            objMM.Subject = "Agile || Response Form";
            objMM.Body = strbody;
            objMM.BodyFormat = MailFormat.Html;
            SmtpMail.Send(objMM);
        }
        catch (Exception ex)
        {
        }
    }
    #endregion

    #region "Mail Send"
    public void ThanksMail(string strName, string strCompany, string strEmail, string strPhone, string strComment)
    {
        try
        {
            string strbody = "<html><head><body><br/><table width='100%' style='font-size: 10pt; font-family: Arial, Verdana' >" +
            "<tr><td align='justify' style='font-family:Arial;' colspan='3'>" +
            "</td></tr>" +
            "<tr><td> <b>Dear " + strName + ",</b><br/> <br/></td></tr>" +
            "<tr><td><p> Thank you for your valuable comments. We will get back to you at the earliest.</p></td></tr>" +
            "<tr><td><br/><br/></td></tr>" +
            "<tr><td></td></tr>" +
            "<tr><td>Best Regards,<br/><b>Support Desk,</b><br/><a href='http://agilepartnersinc.com/'><b>Agile Partners Canada</b></a></td></tr>" +
            "</table></body></head></html>";

            MailMessage objMM = new MailMessage();
            // SmtpMail.SmtpServer = "mail.corpnet.co.in";
            SmtpMail.SmtpServer = "mail.agilepartners.ca";
            //smtp.secureserver.net
            //objMM.From = "bina.solanki@bytetechnosys.com";
            objMM.To = strEmail;

            //objMM.From = "dushyant.patel@bytetechnosys.com";
            objMM.From = "sales@agilepartnersinc.com"; 
            objMM.Subject = "Agile || Response Form";
            objMM.Body = strbody;
            objMM.BodyFormat = MailFormat.Html;
            SmtpMail.Send(objMM);
        }
        catch (Exception ex)
        {
        }
    }
    #endregion

    #region "Button Reset"
    protected void imgbtnReset_Click(object sender, ImageClickEventArgs e)
    {
        clearControl();
    }
    #endregion

    #region "Clear Controls"
    public void clearControl()
    {
        try
        {
            txtName.Text = string.Empty;
            txtPhone.Text = string.Empty;
            txtEmail.Text = string.Empty;
            txtComment.Text = string.Empty;
            txtCompany.Text = string.Empty;
            txtVerificationCode.Text = string.Empty;
            txtName.Focus();
        }
        catch (Exception ex)
        {
        }
    }
    #endregion

    #region "Method Message Display"
    public void message(string msg)
    {
        ScriptManager.RegisterClientScriptBlock(this, GetType(), "Done", "alert('" + msg + "');", true);
    }
    #endregion
}
