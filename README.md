# Hola Gato website

The company website for [holagato.se](https://holagato.se), built with [Astro](https://astro.build/).

## Local development

Install dependencies and start Astro in background mode:

```sh
npm ci
npm run astro -- dev --background
```

Useful server commands:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

Create a production build with:

```sh
npm run build
```

The static site is written to `dist/`.

## Production deployment

[The production workflow](.github/workflows/deploy-production.yml) builds and deploys the site to one.com over SFTP whenever a commit is pushed to `main`. It can also be started manually from the repository's **Actions** tab.

### One-time setup

1. In the one.com Control Panel, open **Advanced settings → SSH & SFTP**.
2. Enable SSH & SFTP access, create an SSH/SFTP password, and note the host, port and username shown by one.com.
3. Find the website's remote folder:
   - On older one.com web spaces, an SFTP login opens directly in the public `httpd.www` folder; use `.`.
   - On newer web spaces, open **Subdomains** in the one.com Control Panel and use the folder assigned to `holagato.se` (the identifier after `/webroots/`, for example `5dfa4a5d`).
4. In GitHub, open **Settings → Secrets and variables → Actions** and create these repository secrets:

| Secret | Value |
| --- | --- |
| `ONECOM_SFTP_HOST` | Host shown under one.com's SSH & SFTP connection details |
| `ONECOM_SFTP_USERNAME` | SFTP username shown by one.com |
| `ONECOM_SFTP_PASSWORD` | The SSH/SFTP password created in one.com |
| `ONECOM_REMOTE_PATH` | `.` for an older web space, or the domain's root-folder identifier on a newer web space |
| `ONECOM_SFTP_PORT` | Optional; only add this if one.com shows a port other than `22` |

The deploy mirrors `dist/` to the selected folder and removes files there that no longer exist in the build. Make sure `ONECOM_REMOTE_PATH` points only to this website's public root.
