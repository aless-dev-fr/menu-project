#!/bin/bash

echo "Performing setup tasks..."

npx prisma generate
npx prisma migrate dev --name init

echo "Setup complete."

npm start