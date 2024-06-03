                                                       # BrewTest: WebApp Tool for Test Case Management System

## Overview
BrewTest is a comprehensive web application designed to facilitate efficient test case management across various teams. The system incorporates robust user roles and permissions, a seamless signup flow with Google SSO, and intuitive dashboards for administrators. The following document outlines the structured requirements and user interface design for BrewTest.

## 1. User Roles and Permissions

### Roles
- **Super Admin**
  - Manages the entire platform
  - Adds/removes teams and users
  - Manages user roles and potentially creates new roles (optional)
- **Admin**
  - Manages users within their specific teams
  - Approves/rejects user signups
  - Modifies user roles
  - Deletes users who are no longer part of the team
- **QA Tester**
  - Adds, updates, and deletes test cases for their assigned teams

## 2. Teams
- **Initial Teams**
  - Growth-Monetisation
  - ShopX
  - LastMile
  - Wms
- **Additional Teams**
  - Can be added by Super Admins (optional)

## 3. Signup Flow

### User Registration
#### Google Single Sign-On (SSO)
- Users sign up using their organization's Google email address (e.g., zeptonow.com)
- Users select their team(s) and role during signup
- Signup request notifications are sent to all Admins of the selected team(s) and the Super Admin
- Any Admin (if the request is for their team) or Super Admin can approve/reject the request
  - Once one approves, others' actions are ignored

#### Normal Signup
- Users provide their first name, last name, email address, team(s) (multiple selection possible), and role
- The same approval flow as Google SSO signup applies

#### Unapproved Users
- Unapproved users see a read-only view of the portal after login
- Rejected users are treated as new users upon login attempts

## 4. Login Flow
- Users can log in using either Google SSO or email address & password
- Login success/failure will be displayed with appropriate messages/validations
- The home page content is tailored to the user's assigned team(s)
- The default view is based on the first team if a user belongs to multiple teams

## 5. Forgot Password Flow
- A Forgot Password option is available for normal email & password logins
- Google SSO password management is handled by Google

## 6. Tasks and Notifications
- Admins/Super Admins will see a notification icon with a count of pending tasks
- Clicking the icon displays categorized notifications:
  - User Approval Requests (with user details & options to approve/reject)
  - Test Case Review Requests/Submissions (with relevant metadata)
  - Other notification categories can be added as needed
- Up to 4-5 notifications will be displayed initially
- A "Click here for more" option leads to a dedicated tasks grid showing all categorized tasks
- Admins can only approve/reject users from their own teams

## 7. Admin/Super Admin Dashboards

### Admin Dashboard
- Dedicated section for managing their teams:
  - Change user roles
  - Delete users who are no longer part of the team

### Super Admin Dashboard
- Similar dashboard for platform-wide management:
  - Add new teams
  - Add new users (directly create credentials)
  - Delete users
  - Manage user roles

---

## UI Design Recommendations

### General Design Principles
- **User-Centric:** The UI should be intuitive and user-friendly, ensuring a seamless experience for all roles.
- **Responsive Design:** The interface should be accessible and usable on various devices, including desktops, tablets, and smartphones.
- **Consistent Layout:** Use a consistent layout and color scheme throughout the application to enhance usability and visual appeal.

### Home Page
- **Dashboard View:** Tailored to the user's assigned team(s), displaying relevant metrics and quick actions.
- **Navigation Bar:** Accessible navigation bar with links to Home, Tasks, Teams, and Settings.

### Signup and Login
- **Clean Forms:** Minimalist and easy-to-complete forms for both Google SSO and normal signup.
- **Validation Messages:** Clear and concise validation messages for login and signup errors.

### Notification System
- **Icon with Badge:** A notification icon with a badge indicating the number of pending tasks.
- **Dropdown Panel:** Clicking the icon reveals a dropdown panel with categorized notifications.
- **Task Grid:** A dedicated tasks grid for a detailed view of all notifications.

### Admin and Super Admin Dashboards
- **Sidebar Navigation:** A sidebar for quick access to user management, team management, and other administrative functions.
- **User Management Panel:** Easy-to-use panel for approving/rejecting users, changing roles, and deleting users.
- **Team Management Panel:** Interface for adding new teams and managing existing ones.

---

By implementing these structured requirements and UI design recommendations, BrewTest will offer a robust, user-friendly platform for managing test cases and user roles efficiently.
