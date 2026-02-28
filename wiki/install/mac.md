---
prev: false
next:
  text: Installing TidaLuna
  link: /install/installing
description: Installing TidaLuna on macOS
---

# Running the Installer on MacOS

If you already have the installer running, continue in [Installing TidaLuna](/install/installing).

## Download the Installer

1. Go to the [TidaLuna Installer Releases](https://github.com/jxnxsdev/TidaLuna-Installer/releases/latest) page.
2. Choose one of these macOS builds:
   - App bundle (recommended):
     - Intel: `installer-macOS-x86_64-vX.X.X.app.zip`
     - Apple Silicon: `installer-macOS-aarch64-vX.X.X.app.zip`
   - Raw binary:
     - `installer-macOS-x86_64-vX.X.X` or `installer-macOS-aarch64-vX.X.X`

## Run the app bundle (`.app.zip`) (recommended)

1. Extract the `.app.zip` file.
2. Double-click the extracted `.app`.
3. Continue with [Installing TidaLuna](/install/installing).

## Run the raw binary

1. Open Terminal in the folder where the binary was downloaded.
2. Run the following commands (replace with your actual file name):

   ```bash
   xattr -d com.apple.quarantine installer-macOS-x86_64-vX.X.X
   ```

   ```bash
   codesign -s - -f --deep installer-macOS-x86_64-vX.X.X
   ```

   ```bash
   chmod +x installer-macOS-x86_64-vX.X.X
   ```

   ::: warning
   If you skip this step, you will get an error when trying to run the installer:
   `zsh: killed installer-macOS-x86_64-vX.X.X`
   :::

3. Allow Terminal to modify apps:
   1. Open **Settings** on macOS.
   2. Go to **Privacy & Security -> App Management**.
   3. Enable **Terminal**.
   ![macOS App Management permissions](/assets/images/mac-perms.png)
4. Run the installer:

   ```bash
   ./installer-macOS-x86_64-vX.X.X
   ```

5. Continue with [Installing TidaLuna](/install/installing).

## Optional: Run in CLI mode

```bash
./installer-macOS-x86_64-vX.X.X --headless --list-versions
./installer-macOS-x86_64-vX.X.X --headless --install
./installer-macOS-x86_64-vX.X.X --headless --uninstall
```

Use `--path "/Applications/TIDAL.app/Contents/Resources"` to target a custom installation path.

## Troubleshooting

If you encounter permission errors, confirm Terminal has App Management permission and that the binary has executable permission.
If you run into issues with the installer, you can try running it with `sudo`:

```bash
sudo ./installer-macOS-x86_64-vX.X.X
```
