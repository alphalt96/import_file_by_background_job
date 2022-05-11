import * as AWS from 'aws-sdk';

export class FileStorage {
  constructor(
    readonly storage: AWS.S3
  ) { }

  async getSignedUrl(fileId: string) {
    const signedUrl = await this.storage.getSignedUrlPromise('putObject', {
      Bucket: 'import-large-files',
      Key: `item-imports/${fileId}.csv`,
      Expires: 60
    });

    return signedUrl;
  }
}
