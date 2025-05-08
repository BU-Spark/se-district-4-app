# D4 Dashboard
## Introduction
Welcome to the District 4 Community App! This user-friendly platform is designed specifically for the residents of Boston's District 4 to enhance community engagement and connectivity. Our app serves as a one-stop hub where residents can easily access vital resources, stay updated with important announcements, and participate in local events.

### Key Features:
- Learn About the District 4: Users can easily access information about the District 4 councilor, stay updated on announcements, and recent developments in the district.
- Event Calendar: Keep track of all district events through a comprehensive calendar feature.
- Resources: Find information about local civic associations and discover associations in your area by entering your address. Access important links and information easily, including
  a way to report non-emergency issues through 311.
- Social Media Page: Allows users to easily see the instagram feed of D4 without leaving the website.
- About Page: Get information about the Councilor and his team.
- (Upcoming) Content Management: The city councilor's office can easily add events, announcements, and other content using Strapi, ensuring the app remains current and relevant.

## Tech Stack/ Technical Architecture
- NextJS: We are using full-stack NextJS framework with the React & TypeScript library to build the frontend of the D4 Dashboard. React allows us to create reusable UI components and efficiently update the user interface as data changes.
- Strapi: We decided to use Strapi as our content management system as it gave us a very user-friendly UI to modify data for admin. This would allow anyone at the city councilor's office who doesn't have a technical background to add events, announcements, etc. We are mainly using it for the Gallery feature that is coming up.
- Firebase: We are using Firebase to host our website as it provides a very easy and efficient way to manage our hosting needs, offering seamless integration with our development tools and ensuring reliable performance.

## Getting Started
To get started with the D4 Dashboard, you'll need to have [node.js](https://nodejs.org/) and the [Firebase CLI](https://firebase.google.com/docs/cli) installed on your machine. Once you've cloned this repository to your local machine, navigate to the project directory and run `npm install` to install all necessary dependencies. We are using next.js.

If the changes have merged to main, can git pull from main, otherwise git checkout dev and then git pull.

Then, go into the next folder by cd next. 

If it is your first time accessing the app, run:
```
npm install
```

## Setting Up Your `.env` File in Strapi

To configure your Strapi project with environment variables, follow these steps:

### Step 1: Open your terminal and navigate to the root directory of your Strapi project.

```bash
cd path/to/your/strapi-project
```

### Step 2: Create the .env file.

```bash
touch .env
```

### Step 3: Open the .env file with your preferred text editor and add the following content. The keys are in a Google doc that is accessible by the PM and TPM.

```plaintext
HOST=0.0.0.0
PORT=1334
APP_KEYS=your_app_keys
API_TOKEN_SALT=your_api_token_salt
ADMIN_JWT_SECRET=your_admin_jwt_secret
TRANSFER_TOKEN_SALT=your_transfer_token_salt

# Database
DATABASE_CLIENT=postgres
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=your_jwt_secret
DATABASE_URL=your_database_url
```

- this env file inside strapi folder


### Step 4: Fill in your values by replacing placeholders with your actual values.

### Step 5: Save the file and restart your Strapi server.

```bash
npm run develop
```
This will launch the app in your default browser, where you can begin using it. 

## Setting Up Your `.env` File in Root directory

### Step 1: Open your terminal and navigate to the root directory of this project

```bash
cd path/to/thisproject
```

### Step 2: Create the .env file.

```bash
touch .env
```

### Step 3: Open the .env file with your preferred text editor and add the following content.

```plaintext
REACT_APP_API_URL=https://api.example.com
REACT_APP_STRAPI_USER=username
REACT_APP_STRAPI_PASSWORD=password
```

## Calendar Functionality
In next folder,

```
npm install @fullcalendar/react @fullcalendar/daygrid @fullcalendar/google-calendar
```

and:
```
npm install @fullcalendar/timegrid
```

in a .env once you cd next from the root directory (in next folder):

```
NEXT_PUBLIC_CALENDAR_API_KEY=your API key
NEXT_PUBLIC_CALENDAR_ID=yourid@group.calendar.google.com
```


## Resource Page functionality
In next folder,
npm install swiper

- once you remove the comments for the resource page to have upcoming events/news displayed, you will need the above ^^

### Step 4: Fill in your API values by replacing placeholders with your actual values.

### Step 5: Save and rebuild the app.
To start the app in development mode, run in next folder:
```
npm run dev
```

## Deployment
Make sure to deploy only after checking with the TPM/PM. Once they have approved, here are the steps to deploy. Our Assistant Solutions Engineer is currently handling the deployment.

You'll need to do the following:

1. Build the production version of the app by running `npm run build`. This will create a production-ready build of the app in the `build` directory.
2. Log into the Firebase CLI via `npx firebase login`. Provide login details.
3. Use the Firebase CLI to deploy the build to your Firebase hosting by running `npx firebase deploy`.
4. Deployed web app will be linked to https://district-4-app.web.app/

This will deploy the D4 Dashboard, making it accessible to users.

## Future Considerations:
- make sure all buttons navigate to webpages, most are empty right now
- flesh out the gallery feature  

We commented upcoming events from the main page and the resource page,
the news and updates from the resource page,
We changed the Quick links in the main page -- the resources are different from those suggested on the figma.
Social Media Page -> change the apify url to be connected with Spark! email instead of a personal email (right now it is an individual users).
Subscribe to Mailing List -> collect emails and connect to API so that it works directly with their link if needed (ask client): https://lp.constantcontactpages.com/su/6umkRa8

## Tests/Checks:
There are no bugs currently. If the displays don't show for these pages please check the following.

Events Page -> should display calendar with events. If no events, make sure to add the env file with the API key and calendar ID.
Social Media Page -> make sure the instagram url in the next/app/api/instagram/route.ts is correct as well as the apify url in next/app/media/page.tsx is connected with the spark email.
Resources -> links to resources
Subscribe to Mailing List -> should route to external link: https://lp.constantcontactpages.com/su/6umkRa8

## Adding Users
If you'd like to contribute to the D4 Dashboard, we welcome your help! To add yourself as a collaborator, simply open a Pull Request and modify the `COLLABORATORS` file by adding your GitHub username on a new line.

Please be sure to follow the Pull Request template, and include a descriptive title in the following format: `[Project Name]: <Descriptive Title>`.
