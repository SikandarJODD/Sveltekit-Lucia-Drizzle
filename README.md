
# SvelteKit - Lucia Auth - Drizzle ORM - Supabase
![Code](heading.jpg)
| Frameworks | Names |
| ---------- | ---------------------- |
| Full Stack | SvelteKit |
| CSS | Tailwind CSS, Daisy UI |
| Backend | Supabase |
| ORM | Drizzle ORM |
| Auth | Lucia Auth - Session based Auth |

### Git Clone Repo

```
  git clone https://github.com/SikandarJODD/Sveltekit-Lucia-Drizzle.git sv_auth
```
or 

### Create .env

Paste Your Supabase - <code>Database URL</code>

```
   DATABASE_URL=postgres://postgres:postgres@localhost:5432/capstone
```

Don't add <code>#</code> in Database Url , Dont add<code>#</code> in database Password

### Install Packages & Run

```
  cd sv_auth 
  npm i
```

### Supabase 
- Go to Supabase > Settings > Database
- Copy the Database URL -> Change the Password <code>Your Password</code>
- Go to Supabase > Go to SQL Editor
- Click on <code>New Querry > New Blank Querry</code> 
- Add your Generated SQL Code 
- Now You are Read to Go 

### Run on Localhost 
```
    npm run dev -- --open
 ```
#### Home Page
![Output](output.png)
#### Sign Up 
![Output](signup.png)
#### Login Page 
![Output](login.png)
#### Login Page  *Dark Mode
![Output](login_dark.png)
