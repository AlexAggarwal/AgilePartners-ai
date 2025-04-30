using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Data.SqlClient;
using System.IO;
using System.Collections;
using System.Drawing.Drawing2D;
/// <summary>
/// Summary description for general
/// </summary>
public class general
{
    public SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["cnstrAgile"].ToString());
    //public SqlCommand command = new SqlCommand();
    public general()
    {
        //
        // TODO: Add constructor logic here
        //
    }
    public void connect()
    {
        try
        {
            if (con.State == ConnectionState.Closed)
            {
                con.Open();
            }
        }
        catch
        {
        }
    }
    public void closeconnect()
    {
        try
        {
            if (con.State == ConnectionState.Open)
            {
                con.Close();
            }
        }
        catch
        {
        }
    }
    public DataTable GetDataTable(string str)
    {
        connect();
        SqlCommand command = new SqlCommand(str, con);
        SqlDataAdapter da = new SqlDataAdapter();
        DataSet ds = new DataSet();
        command.CommandType = System.Data.CommandType.Text;
        da.SelectCommand = command;
        try
        {
            da.Fill(ds, "Generalised");
            closeconnect();
        }
        catch
        {
            closeconnect();
        }
        return ds.Tables[0];

    }
    public DataTable GetDataTableSP(string str, string FieldName, int Id)
    {
        connect();
        SqlCommand command = new SqlCommand(str, con);
        SqlDataAdapter da = new SqlDataAdapter();
        DataSet ds = new DataSet();
        command.CommandType = CommandType.StoredProcedure;
        command.Parameters.Add(FieldName, Id);


        da.SelectCommand = command;
        try
        {
            da.Fill(ds, "Generalised");
            closeconnect();
        }
        catch
        {
            closeconnect();
        }
        return ds.Tables[0];

    }

    public byte[] ResizeMedium(FileUpload Fup, int widthPerc, int HeightPerc)
    {
        MemoryStream ms = new MemoryStream((byte[])Fup.FileBytes);

        System.Drawing.Image Original = System.Drawing.Image.FromStream(ms);
        int sourceHeight = Original.Height;
        int sourceWidth = Original.Width;


        float nPercent = 0;
        float nPercentW = 0;
        float nPercentH = 0;

        nPercentW = ((float)widthPerc / (float)sourceWidth);
        nPercentH = ((float)HeightPerc / (float)sourceHeight);

        if (nPercentH < nPercentW)
            nPercent = nPercentH;
        else
            nPercent = nPercentW;

        int destWidth = (int)(sourceWidth * nPercent);
        int destHeight = (int)(sourceHeight * nPercent);


        System.Drawing.Bitmap newPic = new System.Drawing.Bitmap(destWidth, destHeight);
        System.Drawing.Graphics gr = System.Drawing.Graphics.FromImage(newPic);
        gr.InterpolationMode = InterpolationMode.HighQualityBicubic;
        gr.DrawImage(Original, 0, 0, destWidth, destHeight);
        MemoryStream ms1 = new MemoryStream();
        newPic.Save(ms1, System.Drawing.Imaging.ImageFormat.Jpeg);
        gr.Dispose();
        newPic.Dispose();
        Original.Dispose();
        return ms1.ToArray();
    }

    public byte[] ResizeLargeImage(FileUpload Fup, int fixwidth)
    {
        MemoryStream ms = new MemoryStream((byte[])Fup.FileBytes);

        System.Drawing.Image Original = System.Drawing.Image.FromStream(ms);

        //System.Drawing.Image Original = System.Drawing.Image.FromFile(imgPath);

        int oriheight = Original.Height;
        int oriwidth = Original.Width;
        int height = oriheight;
        int width = fixwidth;
        if (oriwidth > oriheight)
        {
            if (oriwidth > fixwidth)
            {
                height = Math.Abs((oriheight * fixwidth) / oriwidth);
                width = fixwidth;
            }
            else
            {
                height = oriheight;
                width = oriwidth;
            }
        }
        else if (oriwidth < oriheight)
        {
            if (oriheight > fixwidth)
            {
                width = Math.Abs((oriwidth * fixwidth) / oriheight);
                height = fixwidth;
            }
            else
            {
                height = oriheight;
                width = oriwidth;
            }
        }
        else if (oriwidth == oriheight)
        {
            if (oriwidth > fixwidth)
            {
                height = Math.Abs((oriheight * fixwidth) / oriwidth);
                width = fixwidth;
            }
            else
            {
                height = oriheight;
                width = oriwidth;
            }
        }
        System.Drawing.Bitmap newPic = new System.Drawing.Bitmap(width, height);
        //using (Graphics gr = Graphics.FromImage(newPic))
        //{
        //    gr.SmoothingMode = SmoothingMode.AntiAlias;
        //    gr.InterpolationMode = InterpolationMode.HighQualityBicubic;
        //    gr.PixelOffsetMode = PixelOffsetMode.HighQuality;
        //    System.Drawing.Imaging.ImageCodecInfo codec = System.Drawing.Imaging.ImageCodecInfo.GetImageEncoders()[1];
        //    System.Drawing.Imaging.EncoderParameters eParams = new System.Drawing.Imaging.EncoderParameters(1);
        //    eParams.Param[0] = new System.Drawing.Imaging.EncoderParameter(System.Drawing.Imaging.Encoder.Quality, 100L);
        //    gr.DrawImage(Original, new Rectangle(0, 0, width, height));
        //    int logowidth = Math.Abs((width * 60) / 100);
        //    newPic.Save(Server.MapPath("~\\images\\press-gallery\\" + fname), System.Drawing.Imaging.ImageFormat.Jpeg);

        //    gr.Dispose();

        //}
        //newPic.Dispose();
        //Original.Dispose();
        System.Drawing.Graphics gr = System.Drawing.Graphics.FromImage(newPic);
        gr.InterpolationMode = InterpolationMode.HighQualityBicubic;
        gr.DrawImage(Original, 0, 0, width, height);
        MemoryStream ms1 = new MemoryStream();
        newPic.Save(ms1, System.Drawing.Imaging.ImageFormat.Jpeg);
        gr.Dispose();
        newPic.Dispose();
        Original.Dispose();
        return ms1.ToArray();
    }


    public byte[] ResizeSmallImage(FileUpload Fup, int widthPerc, int HeightPerc)
    {
        MemoryStream ms = new MemoryStream((byte[])Fup.FileBytes);

        System.Drawing.Image Original = System.Drawing.Image.FromStream(ms);



        int height = Original.Height;
        int width = Original.Width;
        if (width <= 150)
        {
            widthPerc = width;
        }
        if (height <= 100)
        {
            HeightPerc = height;
        }
        System.Drawing.Bitmap newPic = new System.Drawing.Bitmap(widthPerc, HeightPerc);
        System.Drawing.Graphics gr = System.Drawing.Graphics.FromImage(newPic);
        gr.InterpolationMode = InterpolationMode.HighQualityBicubic;
        gr.DrawImage(Original, 0, 0, widthPerc, HeightPerc);
        MemoryStream ms1 = new MemoryStream();
        newPic.Save(ms1, System.Drawing.Imaging.ImageFormat.Jpeg);
        gr.Dispose();
        newPic.Dispose();
        Original.Dispose();
        return ms1.ToArray();
        //using (Graphics gr = Graphics.FromImage(newPic))
        //{
        //    gr.SmoothingMode = SmoothingMode.AntiAlias;
        //    gr.InterpolationMode = InterpolationMode.HighQualityBicubic;
        //    gr.PixelOffsetMode = PixelOffsetMode.HighQuality;

        //    System.Drawing.Imaging.ImageCodecInfo codec = System.Drawing.Imaging.ImageCodecInfo.GetImageEncoders()[1];


        //    System.Drawing.Imaging.EncoderParameters eParams = new System.Drawing.Imaging.EncoderParameters(1);

        //    eParams.Param[0] = new System.Drawing.Imaging.EncoderParameter(System.Drawing.Imaging.Encoder.Quality, 100L);

        //    MemoryStream ms1 = new MemoryStream();
        //    newPic.Save(ms1, System.Drawing.Imaging.ImageFormat.Jpeg);

        //    //gr.DrawImage(Original, new Rectangle(0, 0, widthPerc, HeightPerc));

        //    //newPic.Save(Server.MapPath("~\\images\\photo-gallery\\small\\" + fname), System.Drawing.Imaging.ImageFormat.Jpeg);

        //    gr.Dispose();

        //}
        //newPic.Dispose();
        //Original.Dispose();
    }

    public DataTable GetDataTableSPWithField(string strSPName, string FieldName, string FieldValue)
    {
        connect();
        SqlCommand command = new SqlCommand(strSPName, con);
        SqlDataAdapter da = new SqlDataAdapter();
        DataSet ds = new DataSet();
        command.CommandType = CommandType.StoredProcedure;
        command.Parameters.Add(FieldName, FieldValue);

        da.SelectCommand = command;
        try
        {
            da.Fill(ds, "Generalised");
            closeconnect();
        }
        catch
        {
            closeconnect();
        }
        return ds.Tables[0];

    }
    public DataTable GetDataTableSPWithTwoField(string strSPName, string FieldName, int FieldValue, string SecFieldName, int SecFieldValue)
    {
        connect();
        SqlCommand command = new SqlCommand(strSPName, con);
        SqlDataAdapter da = new SqlDataAdapter();
        DataSet ds = new DataSet();
        command.CommandType = CommandType.StoredProcedure;
        command.Parameters.Add(FieldName, FieldValue);
        command.Parameters.Add(SecFieldName, SecFieldValue);

        da.SelectCommand = command;
        try
        {
            da.Fill(ds, "Generalised");
            closeconnect();
        }
        catch
        {
            closeconnect();
        }
        return ds.Tables[0];

    }
    public DataTable GetDataTableSPLogin(string str, string FieldName, string Name)
    {
        connect();
        SqlCommand command = new SqlCommand(str, con);
        SqlDataAdapter da = new SqlDataAdapter();
        DataSet ds = new DataSet();
        command.CommandType = CommandType.StoredProcedure;
        command.Parameters.AddWithValue(FieldName, Name);

        da.SelectCommand = command;
        try
        {
            da.Fill(ds, "Generalised");
            closeconnect();
        }
        catch
        {
            closeconnect();
        }
        return ds.Tables[0];

    }
    public void ExecuteQuery(string str)
    {
        connect();
        SqlCommand command = new SqlCommand(str, con);
        command.CommandType = System.Data.CommandType.Text;
        try
        {
            command.ExecuteNonQuery();
            closeconnect();
        }
        catch
        {
            closeconnect();
        }

    }
    public string ExecuteScaler(string str)
    {
        try
        {
            connect();
            SqlCommand command = new SqlCommand(str, con);
            command.CommandType = System.Data.CommandType.Text;
            string str1 = Convert.ToString(command.ExecuteScalar());
            closeconnect();
            return str1;

        }
        catch
        {
            closeconnect();
            return "";
        }


    }
    public Int16 ExecuteScalar(string str)
    {
        connect();
        Int16 Id;
        SqlCommand command = new SqlCommand(str, con);
        command.CommandType = System.Data.CommandType.Text;

        try
        {
            Id = Convert.ToInt16(command.ExecuteScalar());
        }
        catch
        {
            Id = 0;
            closeconnect();
        }
        closeconnect();
        return Id;

    }
    public Int32 ExecuteScalerSPCount(string str, string FieldName, string Name)
    {
        try
        {
            connect();
            SqlCommand command = new SqlCommand(str, con);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue(FieldName, Name);
            Int32 Id;

            Id = Convert.ToInt32(command.ExecuteScalar());
            closeconnect();
            return Id;

        }
        catch
        {
            closeconnect();
            return 0;
        }
    }
    public Int32 ExecuteScalerSPCountUnique(string strSPName, string strIdName, int cntIdValue, string strFieldName, string strFieldValue)
    {
        try
        {
            connect();
            SqlCommand command = new SqlCommand(strSPName, con);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue(strIdName, cntIdValue);
            command.Parameters.AddWithValue(strFieldName, strFieldValue);
            Int32 Id;

            Id = Convert.ToInt32(command.ExecuteScalar());
            closeconnect();
            return Id;

        }
        catch
        {
            closeconnect();
            return 111;
        }

    }
    public Int32 ExecuteScalerSPCountUniqueWith2Field(string strSPName, string strIdName, int cntIdValue, string strFieldName, string strFieldValue, string strIdname1, int cntIDValue1)
    {
        try
        {
            connect();
            SqlCommand command = new SqlCommand(strSPName, con);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue(strIdName, cntIdValue);
            command.Parameters.AddWithValue(strFieldName, strFieldValue);
            command.Parameters.AddWithValue(strIdname1, cntIDValue1);
            Int32 Id;

            Id = Convert.ToInt32(command.ExecuteScalar());
            closeconnect();
            return Id;

        }
        catch
        {
            closeconnect();
            return 111;
        }

    }
    public DataTable ExecuteProcedure(String ProcedureName)
    {
        try
        {
            connect();
            SqlCommand cmdProcudure = new SqlCommand();
            DataTable dtGeneral = new DataTable();
            SqlDataAdapter adpGeneral = new SqlDataAdapter();
            cmdProcudure.CommandText = ProcedureName;
            cmdProcudure.CommandType = CommandType.StoredProcedure;
            cmdProcudure.Connection = con;
            adpGeneral.SelectCommand = cmdProcudure;
            adpGeneral.Fill(dtGeneral);
            closeconnect();
            return dtGeneral;
        }
        catch (Exception ex)
        {
            closeconnect();
            return null;
        }
    }
    public DataTable ExecuteProcedureWithId(String ProcedureName, Int32 Id)
    {
        try
        {
            connect();
            SqlCommand cmdProcudure = new SqlCommand();
            DataTable dtGeneral = new DataTable();
            SqlDataAdapter adpGeneral = new SqlDataAdapter();
            cmdProcudure.CommandText = ProcedureName;
            cmdProcudure.CommandType = CommandType.StoredProcedure;
            cmdProcudure.Parameters.AddWithValue("@Id", Id);
            cmdProcudure.Connection = con;
            adpGeneral.SelectCommand = cmdProcudure;
            adpGeneral.Fill(dtGeneral);
            closeconnect();
            return dtGeneral;

        }
        catch (Exception ex)
        {
            closeconnect();
            return null;
        }
    }
    public string ReturnPageName(string strUrl)
    {
        System.IO.FileInfo page1 = new System.IO.FileInfo(strUrl);
        string sRet = page1.Name;
        return sRet;
    }
    public PagedDataSource GetPhotoAsPagedDataSource(int pageIndex, int pageSize, string PhotoType, int CategoryId)
    {
        // Get ALL of the Archives
        DataTable dt = new DataTable();
        // dt = GetDataTable("SELECT PhotoGalleryId, PhotoName, SmallImage, LargeImage, Comment, IsActive, EntryDate FROM PhotoGalleryMaster WHERE (IsActive = Yes) and PhotoType=" + PhotoType + " ORDER BY PhotoGalleryId DESC");
        if (CategoryId == 0)
        {
            dt = GetDataTable("SELECT * FROM PhotoMaster WHERE IsActive = 1 And PhotoType = " + PhotoType + " and PhotoCategoryId<>4");
        }
        else
        {
            dt = GetDataTable("SELECT * FROM PhotoMaster WHERE IsActive = 1 And PhotoType = " + PhotoType + " and PhotoCategoryId= " + CategoryId);
        }
        //if (dt.Rows.Count > 0)
        //{
        PagedDataSource pagedData = new PagedDataSource();
        DataView dv = new DataView(dt);
        pagedData.DataSource = dv;
        pagedData.AllowPaging = true;
        pagedData.CurrentPageIndex = pageIndex;
        pagedData.PageSize = pageSize;
        return pagedData;
        //}
        //else
        //{
        //    PagedDataSource pagedData = new PagedDataSource();
        //    DataView dv = new DataView(dt);
        //    pagedData.DataSource = dv;
        //    pagedData.AllowPaging = true;
        //    pagedData.CurrentPageIndex = 0;
        //    pagedData.PageSize = pageSize;
        //    return pagedData;
        //}
    }
    public int InsertNewsLettersUser(string strUserEmailId)
    {
        SqlCommand command = new SqlCommand();
        command.CommandType = CommandType.StoredProcedure;
        command.CommandText = "SPInsertNewsLetterUserMaster";
        command.Connection = this.con;
        command.Parameters.AddWithValue("@UserEmailId", strUserEmailId);
        command.Parameters.AddWithValue("@EntryDate", DateTime.Now);
        SqlParameter retpara = new SqlParameter();
        retpara.Direction = ParameterDirection.ReturnValue;
        command.Parameters.Add(retpara);
        int nRet = 0;
        this.connect();
        command.ExecuteNonQuery();
        nRet = Convert.ToInt16(retpara.Value);
        this.closeconnect();
        return nRet;
    }
    public string StringToAscii(string strValue)
    {
        System.Text.StringBuilder encValue = new System.Text.StringBuilder(strValue.Length * 6);
        strValue = strValue.Replace("&nbsp;", " ");
        strValue = strValue.Replace("&quot;", "\"");
        strValue = strValue.Replace("&lt;", "<");
        strValue = strValue.Replace("&gt;", ">");
        strValue = strValue.Replace("&amp;", "&");
        strValue = strValue.Replace("&rdquo;", "\"");
        strValue = strValue.Replace("&ldquo;", "\"");
        strValue = strValue.Replace("&lsquo;", "\"");

        for (int i = 0; i < strValue.Length; i++)
        {
            if (strValue[i].ToString() == "<")
            {
                int tagindex = strValue.IndexOf(">", i);
                String htmltag = strValue.Substring(i, (tagindex - i) + 1);
                encValue.Append(htmltag);
                i = tagindex;
            }
            else
            {
                encValue.Append("&#");
                encValue.Append((Convert.ToInt32(strValue[i])));
                encValue.Append(";");
            }
        }
        encValue = encValue.Replace("&#32;", " ");
        encValue = encValue.Replace("&#13;", " ");
        encValue = encValue.Replace("&#10;", " ");
        return encValue.ToString().Trim();

    }

    //public DataSet MaterialTreeViewData()
    //{
    //    SqlCommand command = new SqlCommand("SPSelectMaterialTreeViewData", con);
    //    DataSet ds = new DataSet();
    //    SqlDataAdapter da = new SqlDataAdapter(command);

    //    try
    //    {
    //        command.CommandType = CommandType.StoredProcedure;
    //        da.Fill(ds);
    //    }
    //    catch
    //    {
    //    }
    //    finally
    //    {
    //        closeconnect();
    //    }
    //    return ds;
    //}

    public DataSet MaterialTreeViewData(string str, string FieldName, int Id)
    {
        connect();
        SqlCommand command = new SqlCommand(str, con);
        SqlDataAdapter da = new SqlDataAdapter();
        DataSet ds = new DataSet();
        command.CommandType = CommandType.StoredProcedure;
        command.Parameters.Add(FieldName, Id);


        da.SelectCommand = command;
        try
        {
            da.Fill(ds, "Generalised");
            closeconnect();
        }
        catch
        {
            closeconnect();
        }
        return ds;

    }

}

