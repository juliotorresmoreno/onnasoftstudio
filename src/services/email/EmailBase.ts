export interface Attachment {
  content?: string | Buffer;
  filename?: string | false;
  path?: string;
}

export interface Tag {
  name: string;
  value: string;
}

export interface CreateEmailOptions {
  attachments?: Attachment[];
  bcc?: string | string[];
  cc?: string | string[];
  from: string;
  headers?: Record<string, string>;
  html: string;
  text?: string;
  reply_to?: string | string[];
  subject: string;
  tags?: Tag[];
  to: string | string[];
}

export class EmailBase {
  async send(opts: CreateEmailOptions): Promise<void> {
    throw new Error("Not implemented");
  }
}
