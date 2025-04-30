<%@ Page Title="Agile Partners Canada-Response Form" Language="C#" MasterPageFile="~/MasterPage.master"
    AutoEventWireup="true" CodeFile="response-form.aspx.cs" Inherits="response_form" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="bredcum">
        <a href="http://agilepartnersinc.com/" class="link">Home &gt;</a><strong style="font-size: 12px;
            color: #000; font-family: Calibri; font-weight: normal;">Response Form</strong>
    </div>
    <img src="images/feedback-img.png" style="margin: 5px 0 0 5px;" alt="Feedback" title="Feedback" />
    <p>
        Note : Fields in <strong style="color: #FF0000;">'Red'</strong> are mandatory fields.
    </p>
    <asp:UpdatePanel ID="udpgellary" UpdateMode="Conditional" runat="server">
        <ContentTemplate>
            <table width="730" cellspacing="0" cellpadding="2" border="0">
                <tbody>
                    <tr>
                        <td height="5" colspan="2">
                            <asp:ValidationSummary ID="ValidationSummary1" runat="server" ShowMessageBox="True"
                                ShowSummary="False" ValidationGroup="submit" />
                        </td>
                    </tr>
                    <tr>
                        <td class="content_text" align="right">
                            <b>Name:</b>
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtName" runat="server" Width="175px" TabIndex="1" ToolTip="Name"
                                CssClass="body_text"></asp:TextBox>
                            <asp:RequiredFieldValidator ID="valfirstname" runat="server" ValidationGroup="submit"
                                ControlToValidate="txtName" ErrorMessage="Name is required." Display="None"></asp:RequiredFieldValidator>
                        </td>
                    </tr>
                    <tr>
                        <td class="content_text" align="right">
                            <b>Company:</b>
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtCompany" runat="server" Width="175px" TabIndex="2" ToolTip="Company"
                                CssClass="body_text"></asp:TextBox>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ValidationGroup="submit"
                                ControlToValidate="txtCompany" ErrorMessage="Company Name is required." Display="None"></asp:RequiredFieldValidator>
                        </td>
                    </tr>
                    <tr>
                        <td class="content_text" align="right">
                            <b>Email Address:</b>
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtEmail" runat="server" Width="175px" TabIndex="3" ToolTip="Email"
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
                            <b>Phone:</b>
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtPhone" MaxLength="10" runat="server" Width="175px" TabIndex="4"
                                ToolTip="Phone Number" CssClass="body_text"></asp:TextBox>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ValidationGroup="submit"
                                ControlToValidate="txtPhone" ErrorMessage="Phone number is required." Display="None"></asp:RequiredFieldValidator>
                        </td>
                    </tr>
                    <tr valign="middle">
                        <td valign="top" align="right" class="content_text">
                            <b>Your Comments:</b>
                        </td>
                        <td>
                            <asp:TextBox ID="txtComment" runat="server" TextMode="MultiLine" Height="175px" Width="232px"
                                TabIndex="5" ToolTip="Your Comments" CssClass="body_text"></asp:TextBox>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" ValidationGroup="submit"
                                ControlToValidate="txtComment" ErrorMessage="Comments are required." Display="None"></asp:RequiredFieldValidator>
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
                                            <asp:TextBox ID="txtVerificationCode" runat="server" Width="90px" TabIndex="6" ToolTip="Verification Code"
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
                            <asp:ImageButton ID="imgbtnSubmit" TabIndex="7" runat="server" Width="87px" Height="28px"
                                ValidationGroup="submit" CausesValidation="true" ToolTip="Submit" ImageUrl="~/images/submitBtn.jpg"
                                OnClick="imgbtnSubmit_Click" />
                            <asp:ImageButton ID="imgbtnReset" runat="server" ToolTip="Reset" TabIndex="8" Width="87px"
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
