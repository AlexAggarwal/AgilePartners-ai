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
   Page Name: Master Page
 * Created By:  Bina Solanki
 * Created Date:    07/02/2012
 * Page Description:   Master page
 */

public partial class MasterPage : System.Web.UI.MasterPage
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {

            string str = "";
            str = Request.Url.ToString();
            string[] strquery = str.Split('?');
            string[] strarray = strquery[0].Split('/');
            if (strarray[strarray.Length - 1].ToString().ToLower() == "contact-us.aspx")
            {
                imgbtnRequestQuote.Visible = false;
               // imgbtnResponseForm.Visible = true;
            }
            else if (strarray[strarray.Length - 1].ToString().ToLower() == "careers.aspx")
            {
                imgbtnRequestQuote.Visible = true;
                // imgbtnResponseForm.Visible = true;
            }
            //else if (strarray[strarray.Length - 1].ToString().ToLower() == "response-form.aspx")
            //{
            //    imgbtnResponseForm.Visible = false;
            //    imgbtnRequestQuote.Visible = true;
            //}
        }

    }

    #region "Method Message Display"
    public void message(string msg)
    {
        ScriptManager.RegisterClientScriptBlock(this, GetType(), "Done", "alert('" + msg + "');", true);
    }
    #endregion
}
