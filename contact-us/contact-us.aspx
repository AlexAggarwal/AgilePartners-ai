<%@ Page Title="" Language="C#" MasterPageFile="~/master/MasterPage.master" AutoEventWireup="true"
    CodeFile="contact-us.aspx.cs" Inherits="contact_us_contact_us" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="bredcum">
        <a href="http://www.agilepartnersinc.com/" class="link">Home &gt;</a><strong style="font-size: 12px;
            color: #000; font-family: Calibri; font-weight: normal;">Contact Us</strong>
    </div>
    <img src="../images/contactus.jpg" style="margin: 5px 0 0 5px;" alt="Contact Us"
        title="Contact Us" />
    <p>
        <strong style="font-size: 14px;">If you have any specific queries on an area of interest,
            please use the form below.<br />
            We will get back to you at the earliest.</strong>
    </p>
    <p>
        Note : Fields in <strong style="color: #FF0000;">'Red'</strong> are mandatory fields.
    </p>
    <asp:UpdatePanel ID="udpgellary" UpdateMode="Conditional" runat="server">
        <ContentTemplate>
            <table width="730" cellspacing="0" cellpadding="2" border="0" align="left">
                <tbody>
                    <tr>
                        <td height="5" colspan="2">
                            <asp:ValidationSummary ID="ValidationSummary1" runat="server" ShowMessageBox="True"
                                ShowSummary="False" ValidationGroup="submit" />
                        </td>
                    </tr>
                    <tr valign="middle">
                        <td width="37%" class="content_text" align="right">
                            <b>First Name: </b>
                        </td>
                        <td width="63%">
                            <asp:TextBox ID="txtFirstName" runat="server" TabIndex="1" ToolTip="First Name" CssClass="body_text"></asp:TextBox>
                            <asp:RequiredFieldValidator ID="valfirstname" runat="server" ValidationGroup="submit"
                                ControlToValidate="txtFirstName" ErrorMessage="First Name is required." Display="None"></asp:RequiredFieldValidator>
                            <ajaxtoolkit:FilteredTextBoxExtender ID="fltrfirstname" runat="server" TargetControlID="txtFirstName"
                                ValidChars="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z, "
                                FilterType="Custom">
                            </ajaxtoolkit:FilteredTextBoxExtender>
                        </td>
                    </tr>
                    <tr valign="middle">
                        <td align="right" class="content_text">
                            <b>Last Name:</b>
                        </td>
                        <td>
                            <asp:TextBox ID="txtLastName" runat="server" TabIndex="2" ToolTip="Last Name" CssClass="body_text"></asp:TextBox>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ValidationGroup="submit"
                                ControlToValidate="txtLastName" ErrorMessage="Last Name is required." Display="None"></asp:RequiredFieldValidator>
                            <ajaxtoolkit:FilteredTextBoxExtender ID="fltrlastname" runat="server" TargetControlID="txtLastName"
                                ValidChars="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z, "
                                FilterType="Custom">
                            </ajaxtoolkit:FilteredTextBoxExtender>
                        </td>
                    </tr>
                    <tr valign="middle">
                        <td align="right" class="content_text">
                            <b>Email Address:</b>
                        </td>
                        <td>
                            <asp:TextBox ID="txtEmail" runat="server" Width="187px" TabIndex="3" ToolTip="Email"
                                CssClass="body_text"></asp:TextBox>
                            <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" ValidationGroup="submit"
                                ControlToValidate="txtEmail" ErrorMessage="Please enter a valid email address."
                                Display="None" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*">*</asp:RegularExpressionValidator>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" ValidationGroup="submit"
                                ControlToValidate="txtEmail" ErrorMessage="Email is required." Display="None"></asp:RequiredFieldValidator>
                        </td>
                    </tr>
                    <tr valign="middle">
                        <td valign="top" class="content_text" align="right">
                            <b>Company Name:</b>
                        </td>
                        <td>
                            <asp:TextBox ID="txtCompanyName" runat="server" Width="187px" TabIndex="4" ToolTip="Company Name"
                                CssClass="body_text"></asp:TextBox>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ValidationGroup="submit"
                                ControlToValidate="txtCompanyName" ErrorMessage="Company name is required." Display="None"></asp:RequiredFieldValidator>
                        </td>
                    </tr>
                    <tr valign="middle">
                        <td align="right" class="content_text">
                            <b>Country:</b>
                        </td>
                        <td>
                            <asp:DropDownList ID="ddlCountry" Width="196px" runat="server" CssClass="body_text">
                            </asp:DropDownList>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator8" runat="server" ValidationGroup="submit"
                                ControlToValidate="ddlCountry" InitialValue="0" ErrorMessage="Country name is required."
                                Display="None"></asp:RequiredFieldValidator>
                        </td>
                    </tr>
                    <tr valign="middle">
                        <td align="right">
                            <b style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal;
                                color: #000000;"><strong>Phone:</strong></b>
                        </td>
                        <td>
                            <asp:TextBox ID="txtStdCode" runat="server" MaxLength="5" Width="55px" TabIndex="6"
                                ToolTip="STD Code" CssClass="body_text"></asp:TextBox>&nbsp;
                            <asp:TextBox ID="txtPhone" MaxLength="10" runat="server" Width="128px" TabIndex="7"
                                ToolTip="Phone" CssClass="body_text"></asp:TextBox>
                            <ajaxtoolkit:FilteredTextBoxExtender ID="flthrStdCode" runat="server" TargetControlID="txtStdCode"
                                ValidChars="0,1,2,3,4,5,6,7,8,9" FilterType="Custom">
                            </ajaxtoolkit:FilteredTextBoxExtender>
                            <ajaxtoolkit:FilteredTextBoxExtender ID="fltrPhone" runat="server" TargetControlID="txtPhone"
                                ValidChars="0,1,2,3,4,5,6,7,8,9" FilterType="Custom">
                            </ajaxtoolkit:FilteredTextBoxExtender>
                        </td>
                    </tr>
                    <tr valign="middle">
                        <td align="right">
                            <b style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal;
                                color: #000000;"><strong>Website URL:</strong></b>
                        </td>
                        <td>
                            <asp:TextBox ID="txtWebsite" MaxLength="2147483647" Text="http://www." runat="server"
                                Width="190px" TabIndex="8" ToolTip="Website URL" CssClass="body_text"></asp:TextBox>
                        </td>
                    </tr>
                    <tr valign="middle">
                        <td align="right" class="content_text">
                            <b>How did you hear about us?:</b>
                        </td>
                        <td>
                            <asp:DropDownList ID="ddlAboutUs" runat="server" AutoPostBack ="true"  
                                CssClass="body_text" onselectedindexchanged="ddlAboutUs_SelectedIndexChanged">
                                <asp:ListItem Text="Select" Value="0"></asp:ListItem>
                                <asp:ListItem Text="Google" Value="1"></asp:ListItem>
                                <asp:ListItem Text="Yahoo" Value="2"></asp:ListItem>
                                <asp:ListItem Text="Bing" Value="3"></asp:ListItem>
                                <asp:ListItem Text="Friends" Value="4"></asp:ListItem>
                                <asp:ListItem Text="Forums" Value="5"></asp:ListItem>
                                <asp:ListItem Text="Email" Value="6"></asp:ListItem>
                                <asp:ListItem Text="Other" Value="7"></asp:ListItem>
                            </asp:DropDownList>
                            <asp:TextBox ID="txtHearAboutUs" runat="server" Width="159px" Enabled ="false" MaxLength="200" TabIndex="4"
                                ToolTip="How did you hear about us?" CssClass="body_text"></asp:TextBox>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ValidationGroup="submit"
                                ControlToValidate="ddlAboutUs" InitialValue="0" ErrorMessage="How you hear about us is required."
                                Display="None"></asp:RequiredFieldValidator>
                        </td>
                    </tr>
                    <tr valign="middle">
                        <td align="right" class="content_text">
                            <b>Category:</b>
                        </td>
                        <td>
                            <asp:DropDownList ID="ddlCategory" runat="server" CssClass="body_text">
                                <asp:ListItem Text="Select" Value="0"></asp:ListItem>
                                <asp:ListItem Text="General Inquiry" Value="1"></asp:ListItem>
                                <asp:ListItem Text="Partnership" Value="2"></asp:ListItem>
                                <asp:ListItem Text="Website Comments" Value="3"></asp:ListItem>
                                <asp:ListItem Text="Other" Value="4"></asp:ListItem>
                            </asp:DropDownList>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ValidationGroup="submit"
                                ControlToValidate="ddlCategory" InitialValue="0" ErrorMessage="Category name is required."
                                Display="None"></asp:RequiredFieldValidator>
                        </td>
                    </tr>
                    <tr valign="middle">
                        <td valign="top" align="right" class="content_text">
                            <b>Your Comments:</b>
                        </td>
                        <td>
                            <asp:TextBox ID="txtComment" runat="server" TextMode="MultiLine" Height="175px" Width="232px"
                                TabIndex="4" ToolTip="Your Comments" CssClass="body_text"></asp:TextBox>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" ValidationGroup="submit"
                                ControlToValidate="txtComment" ErrorMessage="Comments are required." Display="None"></asp:RequiredFieldValidator>
                        </td>
                    </tr>
                    <tr valign="middle">
                        <td valign="top" align="right" class="content_text">
                            <b>Verification Code:</b>
                        </td>
                        <td valign="middle">
                            <table cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr>
                                        <td valign="top">
                                            <asp:TextBox ID="txtVerificationCode" runat="server" Width="90px" TabIndex="4" ToolTip="Verification Code"
                                                CssClass="body_text"></asp:TextBox>
                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator7" runat="server" ValidationGroup="submit"
                                                ControlToValidate="txtVerificationCode" ErrorMessage="Verification code is required."
                                                Display="None"></asp:RequiredFieldValidator>
                                        </td>
                                        <td width="2">
                                        </td>
                                        <td>
                                            <asp:Image ID="imgVerificationCode" ToolTip="Verification Code" runat="server" ImageUrl="~/MakeImage.aspx"
                                                AlternateText="A6D3G" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr valign="middle">
                        <td valign="top" align="right">
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr valign="middle">
                        <td align="right">
                            <div style="color: Red; display: none;" id="ctl00_ContentPlaceHolder2_ValidationSummary2">
                            </div>
                        </td>
                        <td>
                            <asp:ImageButton ID="imgbtnSubmit" runat="server" Width="87px" Height="28px" ValidationGroup="submit"
                                CausesValidation="true" ImageUrl="~/images/submitBtn.jpg" OnClick="imgbtnSubmit_Click" />
                            <asp:ImageButton ID="imgbtnReset" runat="server" Width="87px" Height="28px" CausesValidation="false"
                                ImageUrl="~/images/resetBtn.jpg" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </ContentTemplate>
    </asp:UpdatePanel>
    <asp:Panel ID="ProgressIndicator" runat="server" Style="display: none;">
        <table class="body_text" cellpadding="2" bgcolor="white" style="border: 1px; border-right: #777F81 1px solid;
            border-left: #777F81 1px solid; border-top: #777F81 1px solid; border-bottom: #777F81 1px solid;">
            <tr>
                <td height="32px">
                    <img alt="update" src="../images/loading.gif" />
                </td>
                <td height="32px" valign="middle">
                    <asp:Label ID="lblupdate" runat="server" Text="Loading Data..."></asp:Label>
                </td>
            </tr>
        </table>
    </asp:Panel>
    <anr:CenteredProgressIndicator ID="CenteredProgressIndicator1" runat="server" TargetControlID="ProgressIndicator" />
</asp:Content>
