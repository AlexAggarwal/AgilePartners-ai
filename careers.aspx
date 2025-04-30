<%@ Page Title="Career | Agile Partners"  Language="C#" MasterPageFile="~/MasterPage.master"
    AutoEventWireup="true" CodeFile="careers.aspx.cs" Inherits="career" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="bredcum">
        <a href="http://agilepartnersinc.com/" class="link">Home &gt;</a><strong style="font-size: 12px;
            color: #000; font-family: Calibri; font-weight: normal;">Careers</strong>
    </div>
    <img src="images/careers.jpg" style="margin: 5px 0 0 5px;" alt="Careers" title="Careers" />
    <p>
        <strong style="font-size: 14px;">Please use the form provided below to submit your resume.
        </strong>
    </p>
    <p>
        Note : Fields in <strong style="color: #FF0000;">'Red'</strong> are mandatory fields.
    </p>
    <asp:UpdatePanel ID="udpgellary" UpdateMode="Conditional" runat="server" >
        <ContentTemplate>
            <table width="730" cellspacing="0" cellpadding="2" border="0" align="left">
                <tbody>
                    <tr>
                        <td height="5" colspan="2">
                            <asp:ValidationSummary ID="ValidationSummary1" runat="server" ShowMessageBox="True"
                                ShowSummary="False" ValidationGroup="submit" />
                        </td>
                    </tr>
                    <tr>
                        <td class="content_text" align="right">
                            <b>Your First Name:</b>
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtFirstName" runat="server" Width="175px" TabIndex="1" ToolTip="First Name"
                                CssClass="body_text"></asp:TextBox>
                            <asp:RequiredFieldValidator ID="valfirstname" runat="server" ValidationGroup="submit"
                                ControlToValidate="txtFirstName" ErrorMessage="First Name is required." Display="None"></asp:RequiredFieldValidator>
                         
                        </td>
                    </tr>
                    <tr>
                        <td class="content_text" align="right">
                            <b>Your Last Name:</b>
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtLastName" runat="server" Width="175px" TabIndex="2" ToolTip="Last Name"
                                CssClass="body_text"></asp:TextBox>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ValidationGroup="submit"
                                ControlToValidate="txtLastName" ErrorMessage="Last Name is required." Display="None"></asp:RequiredFieldValidator>
                            
                        </td>
                    </tr>
                    <tr>
                        <td class="content_text" align="right">
                            <b>Contact No:</b>
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtContact" MaxLength="10" runat="server" Width="175px" TabIndex="3"
                                ToolTip="Contact Number" CssClass="body_text"></asp:TextBox>
                            
                        </td>
                    </tr>
                    <tr>
                        <td class="content_text" align="right">
                            <b>Email Address:</b>
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtEmail" runat="server" Width="175px" TabIndex="4" ToolTip="Email"
                                CssClass="body_text"></asp:TextBox>
                            <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" ValidationGroup="submit"
                                ControlToValidate="txtEmail" ErrorMessage="Please enter a valid email address."
                                Display="None" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*">*</asp:RegularExpressionValidator>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" ValidationGroup="submit"
                                ControlToValidate="txtEmail" ErrorMessage="Email is required." Display="None"></asp:RequiredFieldValidator>
                        </td>
                    </tr>
                    <tr>
                        <td class="content_text" align="right">
                            <b>Education:</b>
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtEducation" runat="server" Width="175px" TabIndex="5" ToolTip="Education"
                                CssClass="body_text"></asp:TextBox>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ValidationGroup="submit"
                                ControlToValidate="txtEducation" ErrorMessage="Education is required." Display="None"></asp:RequiredFieldValidator>
                          
                        </td>
                    </tr>
                    <tr>
                        <td class="content_text" align="right">
                            <b>Post Applied For:</b>
                        </td>
                        <td align="left">
                            <asp:DropDownList ID="ddlPost" TabIndex="6" ToolTip="Applied Post" runat="server"
                                CssClass="body_text">
                                <asp:ListItem Text="Select" Value="0"></asp:ListItem>
                                <asp:ListItem Text=".Net Developer" Value="1"></asp:ListItem>
                                <asp:ListItem Text="Technical Support Executive" Value="2"></asp:ListItem>
                            </asp:DropDownList>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ValidationGroup="submit"
                                ControlToValidate="ddlPost" InitialValue="0" ErrorMessage="Post Applied For is required."
                                Display="None"></asp:RequiredFieldValidator>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <b style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;">Experience:</b>
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtExperience" runat="server" Width="175px" TabIndex="7" ToolTip="Experience"
                                CssClass="body_text"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td class="content_text" align="right">
                            <b>Upload Resume:</b>
                        </td>
                        <td align="left">
                            <asp:FileUpload ID="fluResume" Width="180px" TabIndex="8" ToolTip="Resume Upload"
                                runat="server" />
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ControlToValidate="fluResume"
                                Display="None" ErrorMessage="Resume is required." ValidationGroup="submit"></asp:RequiredFieldValidator>
                        </td>
                    </tr>
                    <tr>
                        <td class="content_text" valign="middle" align="right">
                            <b>Verification Code:</b>
                        </td>
                        <td valign="top" align="left">
                            <table cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                    <tr>
                                        <td valign="top">
                                            <asp:TextBox ID="txtVerificationCode" runat="server" Width="90px" TabIndex="9" ToolTip="Verification Code"
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
                    <tr>
                        <td height="5" align="left" colspan="3">
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td align="left" colspan="2">
                            <asp:ImageButton ID="imgbtnSubmit" TabIndex="10" runat="server" Width="87px" Height="28px"
                                ValidationGroup="submit" CausesValidation="true" ToolTip="Submit" ImageUrl="~/images/submitBtn.jpg"
                                OnClick="imgbtnSubmit_Click" />
                            <asp:ImageButton ID="imgbtnReset" runat="server" ToolTip="Reset" TabIndex="11" Width="87px"
                                Height="28px" CausesValidation="false" ImageUrl="~/images/resetBtn.jpg" OnClick="imgbtnReset_Click" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                    </tr>
                </tbody>
            </table>
        </ContentTemplate>
        <Triggers>
            <asp:PostBackTrigger ControlID="imgbtnSubmit" />
        </Triggers>
    </asp:UpdatePanel>
    <asp:Panel ID="ProgressIndicator" runat="server" Style="display: none;">
        <table class="body_text" cellpadding="2" bgcolor="white" style="border: 1px; border-right: #777F81 1px solid;
            border-left: #777F81 1px solid; border-top: #777F81 1px solid; border-bottom: #777F81 1px solid;">
            <tr>
                <td height="32px">
                    <img alt="update" src="images/loading.gif" />
                </td>
                <td height="32px" valign="middle">
                    <asp:Label ID="lblupdate" runat="server" Text="Loading Data..."></asp:Label>
                </td>
            </tr>
        </table>
    </asp:Panel>
    <anr:CenteredProgressIndicator ID="CenteredProgressIndicator1" runat="server" TargetControlID="ProgressIndicator" />
</asp:Content>
