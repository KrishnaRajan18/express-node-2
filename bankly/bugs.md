# Bug #1

Users are defaulted with no-admin.

## Fix

Add a conditional admin on the user registration.

# Bug #2

Login route did not await the authentication.Anyone with wrong password or username could log in.

## Fix

Added an await statement on the function call

# Bug #3

During authentication of a user for _user_ routes, the token was being
decoded, and returned on the header requests. This exposes the token!

## Fix

Add a veryfiy for the token instead of a decode, and used the **SECRET_KEY** var.

# Bug #4

Searching for a non-existant user returns an empty object instead of an error "No such user"

## Fix

The user _Get(username)_ method was not throwing the new error, so if a user did not exist, it would continue as if they did!

# Bug #5

Changing a user's password, does not hash it! It stores the plain-text version on the database

## Fix

Hash if the user provides a password.

# Bug #6

Deleting a user is not being awaited.

## Fix

Added await to **User.delete** statement
