import { ManagementClient } from "auth0";

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID;
const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET;

var management = new ManagementClient({
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_CLIENT_ID,
  clientSecret: AUTH0_CLIENT_SECRET,
});

export const getAllUsers = async (req, res) => {
  try {
    const users = await management.users.getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await management.users.get({ id: req.params.id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
};
