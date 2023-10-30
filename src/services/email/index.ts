import { EmailResend } from "./resend";

export function MakeEmailProvider(provider?: string) {
  let result = new EmailResend();

  return result;
}
