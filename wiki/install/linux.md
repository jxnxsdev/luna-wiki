---
prev: false
next:
  text: Installing TidaLuna
  link: /install/installing
description: Installing TidaLuna on Linux
---

# Running the Installer on Linux

If you already have the Installer launched, you can skip to [Installing TidaLuna](/install/installing).

## Download the Installer

1. Go to the [TidaLuna Installer Releases](https://github.com/jxnxsdev/TidaLuna-Installer/releases/latest) page.
2. Download the latest `linux-x86_64.tar.xz` file.
3. Open a terminal and navigate to the directory where you downloaded the file.
4. Extract the contents of the Tar file using the following command:
   ```bash
   tar -xf linux-x86_64.tar.xz
   ```
5. You should now find a binary file named `luna-installer`.

## Run the Installer

1. Open a terminal and navigate to the directory where you extracted the Installer.
2. You will need to give the installer system access executable permission. Run the following commands:
   ```bash
   chmod +x luna-installer
   ```
3. Start the installer by executing the following command in the terminal:
   ```bash
   ./luna-installer
   ```
4. The installer will start and open a web browser window. If it does not open automatically, you can manually open your browser and go to `http://localhost:3013`.

You can now follow the following steps to install TidaLuna [here](/install/installing).

## Troubleshooting

If you encounter any issues during the installation, make sure that you have the necessary permissions to modify the TIDAL app and that you are running the installer with sufficient privileges. You may need to run the installer with `sudo` if you encounter permission errors.
