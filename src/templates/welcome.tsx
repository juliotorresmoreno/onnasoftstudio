import Handlebars from "handlebars";

type welcomeTemplateProps = {
  name: string;
  supportEmail: string;
  supportURL: string;
};

export const welcomeTemplate = function (data: welcomeTemplateProps) {
  const source = `<div>
      <title>Welcome to Our Platform</title>
      <table width="100%" cellpadding={0} cellspacing={0}>
          <tbody>
              <tr>
                  <td align="center">
                      <h1>Welcome to Our Platform</h1>
                  </td>
              </tr>
              <tr>
                  <td>
                      <p>Hello {{name}}!</p>
                      <p>We welcome you to our platform. We are thrilled to have you as part of our community.</p>
                      <p>Here, you'll find many exciting features and resources that will assist you with cutting-edge software development and harnessing the power of artificial intelligence (AI) to drive your projects forward.</p>
                      <p>If you have any questions or need assistance, please don't hesitate to contact us via {{supportEmail}} or by visiting our help center at {{supportURL}}.</p>
                      <p>We hope you enjoy your experience on our platform!</p>
                      <p>Best regards,</p>
                      <p>The Platform Team</p>
                  </td>
              </tr>
          </tbody>
      </table>
    </div>`;
  const template = Handlebars.compile(source);

  return template(data);
};
