                                    BrewTest: WebApp Tool for Test Case Management System

## **Overview**
BrewTest is a comprehensive web application designed to facilitate efficient test case management across various teams. The system incorporates robust user roles and permissions, a seamless signup flow with Google SSO, and intuitive dashboards for administrators. The following document outlines the structured requirements and user interface design for BrewTest.

## **1. User Roles and Permissions** :key:

### **Roles**
- **Admin** :shield:
  - Can create categories of teams
  - Within these categories, they can create teams
  - If Admin allows, only then can users access this website
  - Approves/rejects user signups![images (1)](https://github.com/anupamxy/SIMPLE_TEST_CASE/assets/123785384/bd1b11cf-5d38-4ee7-990c-b13ad1468ce0)

  - Both paid and free teams can be created by Admin
  - For premium teams, we have a fully-functioning payment gateway; upon payment satisfaction, they can access the website
  - Deletes users who are no longer part of the team

- **QA Tester** :test_tube:
  - Adds, updates, and deletes test cases for their assigned teams
  - We have graphs and a large number of charts to analyze their test cases
  - They can chat with their team members in real-time to discuss their test cases
  - We provide a real-time BrewsDocs page where users can create their test cases with other team members using a real-time test editor

## **2. Teams** :people_holding_hands:

### **Initial Teams**
  - Growth-Monetisation
  - ShopX
  - LastMile
  - Wms

### **Additional Teams**
  - Can be added by Super Admins (optional)

## **3. Signup Flow** :pencil2:

### **User Registration**
#### **Google Single Sign-On (SSO)**
- Users sign up using their organization's Google email address (e.g., zeptonow.com)
- Users select their team(s) and role during signup
- Signup request notifications are sent to all Admins of the selected team(s)
- Any Admin (if the request is for their team) or Super Admin can approve/reject the request
  - Once one approves, others' actions are ignored

#### **Normal Signup**
- Users provide their first name, last name, email address, team(s) (multiple selection possible), and role
- The same approval flow as Google SSO signup applies

#### **Unapproved Users**
- Unapproved users see a read-only view of the portal after login
- Rejected users are treated as new users upon login attempts

## **4. Login Flow** :lock:

- Users can log in using either Google SSO or email address & password
- Login success/failure will be displayed with appropriate messages/validations
- The home page content is tailored to the user's assigned team(s)
- The default view is based on the first team if a user belongs to multiple teams

## **5. Forgot Password Flow** :question:

- A Forgot Password option is available for normal email & password logins
- Google SSO password management is handled by Google

## **6. Tasks and Notifications** :bell:

- Admins/Super Admins will see a notification icon with a count of pending tasks
- Clicking the icon displays categorized notifications:
  - User Approval Requests (with user details & options to approve/reject)
  - Test Case Review Requests/Submissions (with relevant metadata)
  - Other notification categories can be added as needed
- Up to 4-5 notifications will be displayed initially
- A "Click here for more" option leads to a dedicated tasks grid showing all categorized tasks
- Admins can only approve/reject users from their own teams

## **7. Admin Dashboard** :gear:

- Dedicated section for managing their teams:
  - Admin can create categories of teams
  - Admin can create teams for each category
  - Admin can update already existing teams anytime
  - Change user roles
  - Delete users who are no longer part of the team

---

## **UI Design Recommendations** :art:

### **General Design Principles**
- **ChatBot:** Fully operated chatbot which explains the complete website
- **User-Centric:** The UI should be intuitive and user-friendly, ensuring a seamless experience for all roles
- **Responsive Design:** The interface should be accessible and usable on various devices, including desktops, tablets, and smartphones
- **Consistent Layout:** Use a consistent layout and color scheme throughout the application to enhance usability and visual appeal

### **Home Page** :house:

- **Dashboard View:** Tailored to the user's assigned team(s), displaying relevant metrics and quick actions
- **Navigation Bar:** Accessible navigation bar with links to Home, Tasks, Teams, and Settings

### **Signup and Login** :memo:

- **Clean Forms:** Minimalist and easy-to-complete forms for both Google SSO and normal signup
- **Validation Messages:** Clear and concise validation messages for login and signup errors

### **Notification System** :bell:

- **Icon with Badge:** A notification icon with a badge indicating the number of pending tasks
- **Dropdown Panel:** Clicking the icon reveals a dropdown panel with categorized notifications
- **Task Grid:** A dedicated tasks grid for a detailed view of all notifications

### **Admin Dashboard** :clipboard:

- **Sidebar Navigation:** A sidebar for quick access to user management, team management, and other administrative functions
- **User Management Panel:** Easy-to-use panel for approving/rejecting users, changing roles, and deleting users
- **Team Management Panel:** Interface for adding new teams and managing existing ones

---

By implementing these structured requirements and UI design recommendations, BrewTest will offer a robust, user-friendly platform for managing test cases and user roles efficiently.
