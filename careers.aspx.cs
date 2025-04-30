using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Net.Mail;
using System.Net;
using System.IO;
using System.Collections;

/*
   Page Name: Careers
 * Created By:  Bina Solanki
 * Created Date:    07/02/2012
 * Page Description:    With submit careers Form sending mail to admin
 */


public partial class career : System.Web.UI.Page
{
    public general gen = new general();

    #region "Page Load"
    protected void Page_Load(object sender, EventArgs e)
    {
        txtFirstName.Focus();
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
            else if(CheckFileExtension (fluResume .FileName ) == false )
            {
                message("File with only '.pdf','.ppt','.docx' and '.doc' extensions are allowed.");
                return;
            }
            else
            {
                string strFirstName, strLastName, strEmail, strContact, strEducation, strPost, strExperience;

                strFirstName = txtFirstName.Text;
                strLastName = txtLastName.Text;
                strEmail = txtEmail.Text;
                strContact = txtContact.Text;
                strEducation = txtEducation.Text;
                strPost = ddlPost.SelectedItem.Text;
                strExperience = txtExperience.Text;

                clearControl();

                ThanksMail(strFirstName, strLastName, strEmail);
                string strbody = "<html><head><body><table>" +
                " <tr><td align =left style=width: 60px><strong>Name :</strong></td><td><span style=font-size: 12pt>" + strFirstName + " " + strLastName +
                "</span></td></tr>" + " <tr><td align =left style=width: 60px><strong>Email :</strong></td><td><span style=font-size: 12pt>" + strEmail +
                "</span></td></tr>" + " <tr><td align =left style=width: 60px><strong>Contact :</strong></td><td><span style=font-size: 12pt>" + strContact +
                "</span></td></tr>" + " <tr><td align =left style=width: 60px><strong>Education :</strong></td><td><span style=font-size: 12pt>" + strEducation +
                "</span></td></tr>" + " <tr><td align =left style=width: 60px><strong>Experience :</strong></td><td><span style=font-size: 12pt>" + strExperience +
                "</span></td></tr>" + " <tr><td align =left style=width: 60px><strong>Post :</strong></td><td><span style=font-size: 12pt>" + strPost +
                "</span></td></tr>" + " </table></body></head></html>";

                //MailMessage objMM = new MailMessage();
                ////SmtpMail.SmtpServer = "mail.corpnet.co.in";
                //SmtpMail.SmtpServer = "mail.agilepartners.ca";
                ////smtp.secureserver.net
                ////objMM.To = "bina.solanki@bytetechnosys.com";
                //objMM.To = "sales@agilepartnersinc.com"; 
                ////objMM.From = "dushyant.patel@bytetechnosys.com";
                //objMM.From = strEmail;
                //objMM.Subject = "Agile || Career Resume";
                //objMM.Body = strbody;
                //objMM.BodyFormat = MailFormat.Html;


                //fluResume.PostedFile.SaveAs(Server.MapPath(fluResume.FileName));
                //MailAttachment attachment = new MailAttachment(Server.MapPath(fluResume.FileName));
                //// mail.Attachments.Add(attachment);
                //objMM.Attachments.Add(attachment);
                //SmtpMail.Send(objMM);


                MailMessage objMM = new MailMessage();
                objMM.From = new MailAddress("strEmail");
                objMM.To.Add("sales@agilepartnersinc.com");
                objMM.Subject = "Agile || Career Resume";
                objMM.Body = strbody;
                fluResume.PostedFile.SaveAs(Server.MapPath(fluResume.FileName));
                objMM.Attachments.Add ( new Attachment(Server.MapPath(fluResume.FileName)));
                objMM.IsBodyHtml = true;
                SmtpClient client = new SmtpClient("smtp.gmail.com", 587);
                client.EnableSsl = true;
                client.Credentials = new NetworkCredential("webmaster@agilepartners.ca", "Passw0rd123");
                client.Send(objMM);

                
            
            }
        }
        catch (Exception ex)
        {
        }
    }
    #endregion

    #region "Mail Send"
    public void ThanksMail(string strFirstName, string strLastName, string strEmail)
    {
        try
        {
            string strbody = "<html><head><body><br/><table width='100%' style='font-size: 10pt; font-family: Arial, Verdana' >" +
            "<tr><td align='justify' style='font-family:Arial;' colspan='3'>" +
            "</td></tr>" +
            "<tr><td> <b>Dear " + strFirstName + " " + strLastName + ",</b><br/> <br/></td></tr>" +
            "<tr><td><p> Thank you for your valuable comments. We will get back to you at the earliest.</p></td></tr>" +
            "<tr><td><br/><br/></td></tr>" +
            "<tr><td></td></tr>" +
            "<tr><td>Best Regards,<br/><b>Support Desk,</b><br/><a href='http://agilepartnersinc.com/'><b>Agile Partners Canada</b></a></td></tr>" +
            "</table></body></head></html>";

           // MailMessage objMM = new MailMessage();
           //// SmtpMail.SmtpServer = "mail.corpnet.co.in";
           // SmtpMail.SmtpServer = "mail.agilepartners.ca";
           // //smtp.secureserver.net
           // //objMM.To = "bina.solanki@bytetechnosys.com";
           //objMM.To = strEmail;
           // //objMM.From = "dushyant.patel@bytetechnosys.com";
           // objMM.From = "sales@agilepartnersinc.com";
           // objMM.Subject = "Agile || Contact Detail from Contact Us";
           // objMM.Body = strbody;
           // objMM.BodyFormat = MailFormat.Html;
           // SmtpMail.Send(objMM);

                MailMessage objMM = new MailMessage();
                objMM.From = new MailAddress("sales@agilepartnersinc.com");
                objMM.To.Add(strEmail);
                objMM.Subject = "Agile || Career Resume";
                objMM.Body = strbody;
                //fluResume.PostedFile.SaveAs(Server.MapPath(fluResume.FileName));
                //objMM.Attachments.Add ( new Attachment(Server.MapPath(fluResume.FileName));
                objMM.IsBodyHtml = true;
                SmtpClient client = new SmtpClient("smtp.gmail.com", 587);
                client.EnableSsl = true;
                client.Credentials = new NetworkCredential("webmaster@agilepartners.ca", "Passw0rd123");
                client.Send(objMM);
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
            txtFirstName.Text = string.Empty;
            txtLastName.Text = string.Empty;
            txtExperience.Text = string.Empty;
            txtContact.Text = string.Empty;
            txtEducation.Text = string.Empty;
            txtEmail.Text = string.Empty;
            ddlPost.SelectedValue = "0";
            txtVerificationCode.Text = string.Empty;
            txtFirstName.Focus();

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

    #region "Check File Extension"
    public Boolean CheckFileExtension(string strFileName)
    {
        string[] strSplit = new string[2];
        strSplit = strFileName.Split('.');
        if (strSplit[1].ToString().ToLower() == "docx" || strSplit[1].ToString().ToLower() == "doc" || strSplit[1].ToString().ToLower() == "ppt")
        {
            return true;
        }
        else
        {
            message("File with only '.pdf','.xls','.ppt','.jpeg' and '.doc' extensions are allowed.");
            return false;
        }
    }
    #endregion
}
