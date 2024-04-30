import WebhookValidator from '@/app/api/webhooks/validate';
import prisma from '@/app/lib/prisma';

/**
 * This webhook is triggered when a user is created in Clerk.
 * We want to create a user in our database when this happens so we can map a clerk user to our app user.
 * 
 * @param req {
  "data": {
    "birthday": "",
    "created_at": 1654012591514,
    "email_addresses": [
      {
        "email_address": "example@example.org",
        "id": "idn_29w83yL7CwVlJXylYLxcslromF1",
        "linked_to": [],
        "object": "email_address",
        "verification": {
          "status": "verified",
          "strategy": "ticket"
        }
      }
    ],
    "external_accounts": [],
    "external_id": "567772",
    "first_name": "Example",
    "gender": "",
    "id": "user_29w83sxmDNGwOuEthce5gg56FcC",
    "image_url": "https://img.clerk.com/xxxxxx",
    "last_name": "Example",
    "last_sign_in_at": 1654012591514,
    "object": "user",
    "password_enabled": true,
    "phone_numbers": [],
    "primary_email_address_id": "idn_29w83yL7CwVlJXylYLxcslromF1",
    "primary_phone_number_id": null,
    "primary_web3_wallet_id": null,
    "private_metadata": {},
    "profile_image_url": "https://www.gravatar.com/avatar?d=mp",
    "public_metadata": {},
    "two_factor_enabled": false,
    "unsafe_metadata": {},
    "updated_at": 1654012591835,
    "username": null,
    "web3_wallets": []
  },
  "object": "event",
  "type": "user.created"
}
 * @returns Response
 */
export const POST = async (req: Request) => {
  let evt;
  try {
    evt = await WebhookValidator(req);
  } catch (exception: any) {
    return new Response(exception.message, { status: 400 }) 
  }
  
  // Validate both needed fields exist
  if (
    "primary_email_address_id" in evt.data &&
    "email_addresses" in evt.data) {

    const { id, primary_email_address_id, email_addresses } = evt.data;
    const email = email_addresses.find((email) => email.id === primary_email_address_id);

    if (!id || !email) {
      return new Response('Missing Information', { status: 400 }) 
    }
    
    try {
      prisma.user.create({
        data: {
          external_id: id,
          email: email.email_address
        }
      })
    } catch (exc: any) {
      return new Response(exc.message, { status: 500 }) 
    }
    
  }

  return new Response('', { status: 200 })
}

export const GET = async (req: Request) => {
  console.log('yaught')
  return new Response('FOUND', { status: 200 })
}