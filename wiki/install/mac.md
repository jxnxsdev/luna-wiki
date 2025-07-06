---
prev: false
next:
  text: Installing TidaLuna
  link: /install/installing
description: Installing TidaLuna on macOS
---

# Running the Installer on MacOS

If you already have the Installer launched, you can skip to [Installing TidaLuna](/install/installing).

## Download the Installer

1. Go to the [TidaLuna Installer Releases](https://github.com/jxnxsdev/TidaLuna-Installer/releases/latest) page.
2. Download the installer file named `macOS-x86_64.tar.gz` or `macOS-aarch64.tar.gz` depending on your system architecture.
   - If you are unsure which version to download, you can check your Mac's architecture by clicking the Apple logo in the top-left corner of your screen and selecting "About This Mac". Look for "Chip" or "Processor" to determine if it is Intel (x86_64) or Apple Silicon (aarch64).
3. Extract the contents of the Tar file. You can do this by double-clicking the file in Finder, or by using the terminal command:
   ```bash
   tar -xzf macOS-x86_64.tar.gz
   ```
   or
   ```bash
   tar -xzf macOS-aarch64.tar.gz
   ```
4. You should now find a binary file named `luna-installer`.

## Run the Installer

1. Open the folder where you extracted the Installer inside a terminal
2. You will need to give the installer system access executable permission. Run the following commands:

   ```bash
   xattr -d com.apple.quarantine luna-installer
   ```

   ```bash
   codesign -s - -f --deep luna-installer
   ```

   ```bash
   chmod +x luna-installer
   ```

   ::: warning
   If you skip this step, you will get an error when trying to run the installer:
   `   zsh: killed luna-installer`
   :::

3. Allow the installer to access and modify the TIDAL app. For that, do the following:
   1. Open the settings app of your Mac.
   2. Navigate to Privacy and Security -> App Management
   3. Check "Terminal" to allow it to update / delete other applications
      ![img](/assets/images/mac-perms.png)
4. Now you can run the installer by executing the following command in the terminal:

   ```bash
   ./luna-installer
   ```

5. If your browser does not automatically open a website, open it manually by visiting [https://localhost:3013](https://localhost:3013).

You can now follow the following steps to install TidaLuna [here](/install/installing).

## Troubleshooting

If you encounter any issues during the installation, make sure that you have the necessary permissions to modify the TIDAL app and that you are running the installer with sufficient privileges. You may need to run the installer with `sudo` if you encounter permission errors.
If you run into issues with the installer, you can try running it with `sudo`:

```bash
sudo ./luna-installer
```
