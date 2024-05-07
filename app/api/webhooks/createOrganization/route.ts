import WebhookValidator from '@/app/api/webhooks/validate';
import prisma from '@/app/lib/prisma';

/**
 * This webhook is triggered when an organization is created in Clerk.
 * We want to create an organization in our database when this happens so we can map a clerk organization to our app data.
 * 
 * @param req {
  {
  "data": {
    "created_at": 1654013202977,
    "created_by": "user_1vq84bqWzw7qmFgqSwN4CH1Wp0n",
    "id": "org_29w9IfBrPmcpi0IeBVaKtA7R94W",
    "image_url": "https://img.clerk.com/xxxxxx",
    "logo_url": "https://example.org/example.png",
    "name": "Acme Inc",
    "object": "organization",
    "public_metadata": {},
    "slug": "acme-inc",
    "updated_at": 1654013202977
  },
  "object": "event",
  "type": "organization.created"
}
 * @returns Response
 */
export const POST = async (req: Request) => {
  let evt;
  const orgWebhookSecret = process.env.ORG_WEBHOOK_SECRET

  try {
    evt = await WebhookValidator(req, orgWebhookSecret);
  } catch (exception: any) {
    console.log(exception.message)
    return new Response(exception.message, { status: 400 }) 
  }
  
  // Validate both needed fields exist
  if (
    "id" in evt.data &&
    "name" in evt.data) {

    const { id, name } = evt.data;

    if (!id || !name) {
      return new Response('Missing Information', { status: 400 }) 
    }
    
    try {
      await prisma.organization.create({
        data: {
          external_id: id,
          name
        }
      })
    } catch (exc: any) {
      return new Response(exc.message, { status: 500 }) 
    }
    
  } else {
    return new Response('Missing Information', { status: 400 }) 
  }

  return new Response('', { status: 200 })
}

export const GET = async (req: Request) => {
  console.log('yaught')
  return new Response('FOUND', { status: 200 })
}