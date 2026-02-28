---
prev: false
next:
  text: Installing TidaLuna
  link: /install/installing
description: Installing TidaLuna on Linux
---

# Running the Installer on Linux

If you already have the installer running, continue in [Installing TidaLuna](/install/installing).

## Download the Installer

1. Go to the [TidaLuna Installer Releases](https://github.com/jxnxsdev/TidaLuna-Installer/releases/latest) page.
2. Choose one of the Linux builds:
   - `.deb` package: `installer-linux-x86_64-vX.X.X.deb`
   - AppImage: `installer-linux-x86_64-vX.X.X.AppImage`
   - Portable binary: `installer-linux-x86_64-vX.X.X`

## Run using `.deb` (recommended)

1. Double-click the `.deb` file and install it with your package manager.
2. Launch **TidaLuna Installer** from your app menu.
3. Continue with [Installing TidaLuna](/install/installing).

## Run using `.AppImage`

1. Open a terminal in the download folder.
2. Make it executable (if needed):

   ```bash
   chmod +x installer-linux-x86_64-vX.X.X.AppImage
   ```

3. Run it:

   ```bash
   ./installer-linux-x86_64-vX.X.X.AppImage
   ```

## Run using portable binary

1. Open a terminal in the download folder.
2. Make it executable (if needed):

   ```bash
   chmod +x installer-linux-x86_64-vX.X.X
   ```

3. Run it:

   ```bash
   ./installer-linux-x86_64-vX.X.X
   ```

## Optional: Run in CLI mode

```bash
./installer-linux-x86_64-vX.X.X --headless --list-versions
./installer-linux-x86_64-vX.X.X --headless --install
./installer-linux-x86_64-vX.X.X --headless --uninstall
```

Use `--path "/path/to/tidal/resources"` to target a custom installation path.

## Troubleshooting

If you encounter permission errors, make sure the installer file is executable and that you can write to your TIDAL installation path.
