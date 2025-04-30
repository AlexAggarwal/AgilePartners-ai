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
   Page Name: Contact us
 * Created By:  Bina Solanki
 * Created Date:    07/02/2012
 * Page Description:    With submit contact us Form sending mail to admin
 */

public partial class contact_us_contact_us : System.Web.UI.Page
{
    public general gen = new general();

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            //fillCountry();
        }
    }

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
                string strFirstName, strLastName, strEmail, strCompany, strCountry, strPhone, strWebsite, strHearAboutUs, strCategory, strComment;

                //strFirstName = txtFirstName.Text;
                //strLastName = txtLastName.Text;
                //strEmail = txtEmail.Text;
                //strCompany = txtCompanyName.Text;
                //strCountry = ddlCountry.SelectedItem.Text;
                //strPhone = txtStdCode.Text + " - " + txtPhone.Text;
                //strWebsite = txtWebsite.Text;

                strFirstName = "First Name";
                strLastName = "Lst Name";
                strEmail = "Email";
                strCompany = "Company Name";
                strCountry = "Country Name";
                strPhone = "Std Code";
                strWebsite = "Website";

                //if (txtHearAboutUs.Enabled == true)
                //    strHearAboutUs = ddlAboutUs.SelectedItem.Text + " - " + txtHearAboutUs.Text;
                //else
                //    strHearAboutUs = ddlAboutUs.SelectedItem.Text;

                //strCategory = ddlCategory.SelectedItem.Text;
                //strComment = txtComment.Text;

                strHearAboutUs = "AbouUs";
                strCategory = "Category";
                strComment = "Comment";
                //clearControl();
                SendMail(strFirstName, strLastName, strEmail, strCompany, strCountry, strPhone, strWebsite, strHearAboutUs, strCategory, strComment);
            }
        }
        catch (Exception ex)
        {
        }
    }
    #endregion

    #region "Mail Send"
    public void SendMail(string strFirstName, string strLastName, string strEmail, string strCompany, string strCountry, string strPhone, string strWebsite, string strHearAboutUs, string strCategory, string strComment)
    {
        try
        {
            string strbody = "<html><head><body><table>" +
              " <tr><td align =left style=width: 60px><strong>Name :</strong></td><td><span style=font-size: 12pt>" + strFirstName + " " + strLastName +
              "</span></td></tr>" + " <tr><td align =left style=width: 60px><strong>Email :</strong></td><td><span style=font-size: 12pt>" + strEmail +
              "</span></td></tr>" + " <tr><td align =left style=width: 60px><strong>Company :</strong></td><td><span style=font-size: 12pt>" + strCompany +
              "</span></td></tr>" + " <tr><td align =left style=width: 60px><strong>Country :</strong></td><td><span style=font-size: 12pt>" + strCountry +
              "</span></td></tr>" + " <tr><td align =left style=width: 60px><strong>Phone :</strong></td><td><span style=font-size: 12pt>" + strPhone +
              "</span></td></tr>" + " <tr><td align =left style=width: 60px><strong>Website :</strong></td><td><span style=font-size: 12pt>" + strWebsite +
              "</span></td></tr>" + " <tr><td align =left style=width: 60px><strong>How did you hear about us? :</strong></td><td><span style=font-size: 12pt>" + strHearAboutUs +
              "</span></td></tr>" + " <tr><td align =left style=width: 60px><strong>Category :</strong></td><td><span style=font-size: 12pt>" + strCategory +
              "</span></td></tr>" + " <tr><td align =left style=width: 60px><strong>Your Comments :</strong></td><td><span style=font-size: 12pt>" + strComment +
              "</span></td></tr>" + " </table></body></head></html>";

            MailMessage objMM = new MailMessage();
            // SmtpMail.SmtpServer = "mail.corpnet.co.in";
            SmtpMail.SmtpServer = "smtp.secureserver.net";
            //smtp.secureserver.net
            objMM.To = "bina.solanki@bytetechnosys.com";
            //objMM.To = strEmail;
            //objMM.From = "dushyant.patel@bytetechnosys.com";
            objMM.From = "sales@agilepartnersinc.com";
            objMM.Subject = "Agile || Contact Detail from Contact Us";
            objMM.Body = strbody;
            objMM.BodyFormat = MailFormat.Html;
            SmtpMail.Send(objMM);
        }
        catch (Exception ex)
        {
        }
    }
    #endregion

    //#region "Bind Country"
    //public void fillCountry()
    //{
    //    try
    //    {
    //        DataTable dtCountry = gen.GetDataTable("SPSelectCountryWithSelect");
    //        ddlCountry.DataSource = dtCountry;
    //        ddlCountry.DataTextField = "CountryName";
    //        ddlCountry.DataValueField = "CountryId";
    //        ddlCountry.DataBind();
    //        ddlCountry.SelectedValue = "0";
    //    }
    //    catch
    //    {
    //    }
    //}
    //#endregion

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
            txtStdCode.Text = string.Empty;
            txtPhone.Text = string.Empty;
            txtEmail.Text = string.Empty;
            txtCompanyName.Text = string.Empty;
            txtComment.Text = string.Empty;
            txtHearAboutUs.Text = string.Empty;
            txtVerificationCode.Text = string.Empty;
            txtWebsite.Text = "http://www.";
            ddlAboutUs.SelectedValue = "0";
            ddlCategory.SelectedValue = "0";
            ddlCountry.SelectedValue = "0";
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
    protected void ddlAboutUs_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlAboutUs.SelectedItem.Text == "Other")
            txtHearAboutUs.Enabled = true;
        else
            txtHearAboutUs.Enabled = false;
    }
}
