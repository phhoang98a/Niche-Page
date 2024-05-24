import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-2',
});

export async function POST(request) {
    const { email } = await request.json()
    
    const ses = new AWS.SES();

    const params = {
      Source: '"NicheTensor" <hoangph7298@gmail.com>',
      Destination: {
        ToAddresses: ['henryphan0702@gmail.com'], 
      },
      Message: {
        Subject: {
          Data: 'NicheTensor credits request',
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: `You have a new NicheTensor credits request from ${email}`,
            Charset: 'UTF-8',
          },
        },
      },
    };
    try {
      await ses.sendEmail(params).promise();
      return new Response('Email sent successfully', {
        status: 200,
      })
    } catch (error) {
      return new Response('Failed to send email', {
        status: 500,
      })
    }

}