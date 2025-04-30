using System;
using System.Collections;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Drawing.Imaging;
using System.Web;
using System.Web.SessionState;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using imgver.NumberGenerator;

namespace imgver
{
    /// <summary>
    /// Summary description for WebForm1.
    /// </summary>
    public partial class MakeImage : System.Web.UI.Page
    {

        protected void Page_Load(object sender, System.EventArgs e)
		{

			CImgVerify cI = new CImgVerify();		
			string sTxt = cI.getRandomAlphaNumeric();
			Bitmap bmp = cI.generateImage(sTxt);
            Response.ContentType="image/gif";
            bmp.Save(Response.OutputStream,ImageFormat.Gif);

            //Session["Code"] = sTxt;
            HttpCookie Code = new HttpCookie("Code");
            Code.Value = sTxt;
            Response.Cookies.Add(Code);
            // Dim aCookie As New HttpCookie("En")
            //    aCookie.Value = Convert.ToInt16("3")
            //aCookie.Expires = DateTime.Now.AddDays(1)
            // Response.Cookies.Add(aCookie)
			bmp.Dispose();


		}

        #region Web Form Designer generated code
        override protected void OnInit(EventArgs e)
        {
            //
            // CODEGEN: This call is required by the ASP.NET Web Form Designer.
            //
            InitializeComponent();
            base.OnInit(e);
        }

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {

        }
        #endregion

    }
}
