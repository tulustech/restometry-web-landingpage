# restometry-www-landingpage

## Deployment

Deployments run only for direct branch builds of `deploy/<environment>`. Jenkins does not deploy pull-request builds, including pull requests whose source branch is a deploy branch. A merged pull request deploys when its merge reaches the corresponding deploy branch.

Jenkins requires only Git, an SSH client/agent, and rsync. Install these Jenkins plugins: Pipeline, Git, SSH Agent, Pipeline Utility Steps, AnsiColor, Timestamper, and Workspace Cleanup. Configure the SSH private-key credential `dev0-deploy-key`, or select another credential through the `SSH_CREDENTIALS_ID` build parameter.

The deployment host requires Docker Engine, Docker Compose v2 (`docker compose`), SSH access, and Docker permissions for the deployment user. Jenkins does not run Node, npm, Docker, or Docker Compose; Docker builds the application on the deployment host.

Each branch environment has a `deploy/<environment>.yml` file with these values:

```yaml
deploy_hostname: deploy.example.com
deploy_username: deploy
deploy_workspace: /srv/restometry-landing
deploy_project: restometry-landing
env_file: .env
```

Provision the persistent remote files manually before the first deployment. The pipeline and deployment script never create, delete, or replace `common/`:

```sh
export DEPLOY_WORKSPACE=/path/from/deploy-config
mkdir -p "$DEPLOY_WORKSPACE/common/data" "$DEPLOY_WORKSPACE/common/public"
cp /path/to/production.env "$DEPLOY_WORKSPACE/common/.env"
chmod 600 "$DEPLOY_WORKSPACE/common/.env"
```

The remote layout is:

```text
<deploy_workspace>/
  common/
    .env
    data/
    public/
  build/
  current/
  previous/
```

`build/`, `current/`, and `previous/` are release directories. `common/.env`, `common/data/`, and `common/public/` are persistent. `APP_PORT` and `NEXT_PUBLIC_SITE_URL` are supplied by `common/.env`. Files in `common/public/` are copied into the Next.js image during deployment, so asset changes require a redeployment.


Restometry – Feature List
Phase 1
Smart Scheduling (Basic Version)
	•	Create shifts manually:
	•	Role (e.g. waiter, cook, barista)
	•	Time-in, Time-out
	•	System suggests:
	•	Recommended staff count per hour based on historical sales
	•	Warnings if labor cost is exceeding thresholds
Why: Immediate benefit—saves time and prevents costly overstaffing.
⸻
Attendance Tracking (Basic)
	•	Manual attendance log:
	•	Time-in, Time-out
	•	Overtime hours
	•	Exportable report for payroll reference

Why: Connects schedule planning to real-life attendance and costs.
⸻
Labor Cost Calculator
•	Simple dashboard:
•	Total labor cost for a day/week
•	Labor cost as % of sales
•	Alert if labor % exceeds target threshold (e.g. 30%)
Why: The #1 KPI restaurant owners care about is labor % vs sales.
⸻
Simple Dashboard Home
•	High-level summary:
•	Today’s sales (from imported POS data)
•	Today’s scheduled labor cost
•	Labor % vs sales
•	Notifications (e.g. “Tomorrow looks under-staffed”)
Why: Restaurant owners want a quick snapshot, not endless screens.
⸻
Daily Sales Entry & Update
•	Manually post daily sales figures
•	Edit/update sales for any previous day
•	Validation to prevent duplicate entries
•	Changes reflected instantly in dashboards and labor calculations

Why: Enables accurate tracking even if POS data import is unavailable or delayed.
⸻
Phase 2
POS Sales Data Import
•	Simple CSV import from POS (daily sales totals by hour)
•	Future upgrade: direct API integration to POS systems
•	Minimal mapping screen:
•	“Sales Date”
•	“Total Sales”
•	“Hourly Sales (optional)”
Why: Everything in labor optimization starts with knowing sales patterns.
⸻
Multi-Branch Support (Optional MVP Scope)
•	Toggle between branches
•	View separate dashboards
•	Aggregate labor cost % across all branches
Why: Many restaurant owners run 2-3 stores and want an “all-up” view.
⸻
User Management
•	Basic roles:
•	Owner/Admin
•	Manager (limited access)
•	Login system

Why: Keep it secure, especially for multi-branch users.
⸻
Performance Overview (Basic)
•	Staff roster with:
•	Total hours worked
•	Absences/tardiness count
•	Optional manual input:
•	Notes about performance

Why: Even minimal tracking helps managers spot unreliable staff.
