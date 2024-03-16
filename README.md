                                                        SIMPLE_TEST_CASE
                                              BrewTest: WebApp Tool for Test Case Management System (Structured Requirements)
1. User Roles and Permissions:
Roles:
● Super Admin: Manages the entire platform, including adding/removing teams
and users, managing user roles, and potentially creating new roles (optional).
● Admin: Manages users within their specific teams, including approving/rejecting
user signups, modifying user roles, and deleting users who are no longer part of
the team.
● QA Tester: Adds, updates, and deletes test cases for their assigned teams.
2. Teams:
● The system will initially support these teams: Growth-Monetisation, ShopX,
LastMile, Wms.
● Additional teams can be added by Super Admins (optional).
3. Signup Flow:
User Registration:
● Google Single Sign-On (SSO):
● Users can sign up using their organization's Google email address (e.g.,
zeptonow.com).
● Upon signup, users select their team(s) and role.
● A signup request notification is sent to all Admins of the selected team(s)
and the Super Admin.
● Any Admin(if the request is of their team) or Super Admin can
approve/reject the request. If one approves, others' actions are ignored.
● Normal Signup:
● Users provide their first name, last name, email address, team(s)
(multiple selection possible), and role.
● Same approval flow as Google SSO signup applies.
● Unapproved Users:
● Users who haven't been approved see a read-only view of the portal after
login.
● Rejected users are treated as new users upon login attempts.
4. Login Flow:
● Users can log in using either Google SSO or email address & password.
● Login success/failure will be displayed with appropriate messages/validations.
● The home page content will be tailored to the user's assigned team(s).
● The default view will be based on the first team if a user belongs to multiple
teams.
5. Forgot Password Flow:
● A Forgot Password option will be available for normal email & password logins.
● Google SSO password management will be handled by Google.
6. Tasks and Notifications:
● Admins/Super Admins will see a notification icon with a count of pending tasks.
● Clicking the icon will display categorized notifications:
● User Approval Requests (with user details & options to approve/reject)
● Test Case Review Requests/Submissions (with relevant metadata)
● Other notification categories can be added as needed.
● Up to 4-5 notifications will be displayed initially.
● A "Click here for more" option will lead to a dedicated tasks grid showing all
categorized tasks.
● Admins can only approve/reject users from their own teams.
7. Admin/Super Admin Dashboards:
● Admins will have a dedicated section (location to be determined) for managing
their teams:
● Change user roles
● Delete users who are no longer part of the team
● Super Admins will have a similar dashboard for platform-wide management:
● Add new teams
● Add new users (directly create credentials)
● Delete users
● Manage user roles
