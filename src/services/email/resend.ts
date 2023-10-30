import { Resend } from "resend";
import { CreateEmailOptions, EmailBase } from "./EmailBase";
import config from "@/config";

export class EmailResend extends EmailBase {
  private provider: Resend | null = null;

  constructor() {
    super();

    this.provider = new Resend(config.RESEND_API_KEY);
  }

  async send(opts: CreateEmailOptions): Promise<void> {
    if (!this.provider) {
      throw new Error("Provider is not defined!");
    }
    await this.provider.emails.send(opts).then(console.log);
  }
}
