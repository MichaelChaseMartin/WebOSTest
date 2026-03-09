# WebOSTest

Minimal webOS TV app scaffold that can be packaged and deployed to a paired TV.

## Files

- `appinfo.json` - webOS app manifest.
- `index.html` / `styles.css` / `app.js` - simple runtime-check UI.

## Deploy to your paired TV

Prerequisite: [webOS CLI (`ares-cli`)](https://webostv.developer.lge.com/develop/tools/cli-installation) is installed and your TV is already added/paired in CLI.

```bash
# from this repo
ares-package .

# replace tv-device with your ares device profile name
ares-install --device tv-device com.example.webostest_1.0.0_all.ipk
ares-launch --device tv-device com.example.webostest
```

### Useful commands

```bash
ares-device-info --device tv-device
ares-launch --device tv-device com.example.webostest --close
```

If the app opens on TV and shows `Running on webOS runtime ✅`, deployment succeeded.
