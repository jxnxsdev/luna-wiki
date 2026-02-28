---
prev: false
next:
  text: Installing TidaLuna
  link: /install/installing
description: Installing TidaLuna on Windows
---

# Running the Installer on Windows

::: warning
If you have the Microsoft Store version of TIDAL installed, you need to uninstall it and instead use the TIDAL installer from
[Tidals Website](https://tidal.com/download). The Microsoft Store version is not compatible with TidaLuna.
:::

If you already have the installer running, continue in [Installing TidaLuna](/install/installing).

## Download the Installer

1. Go to the [TidaLuna Installer Releases](https://github.com/jxnxsdev/TidaLuna-Installer/releases/latest) page.
2. Download the latest Windows executable: `installer-windows-x86_64-vX.X.X.exe`.

## Run the Installer

1. Open the folder where you downloaded the file.
2. Double-click `installer-windows-x86_64-vX.X.X.exe`.
3. You might run into a warning from Windows Defender SmartScreen. If you do, click on `More info` and then `Run anyway` to proceed.
   This is a standard warning for applications that are not signed or widely recognized by Microsoft.
4. The installer UI opens directly. Follow [Installing TidaLuna](/install/installing) to complete setup.

## Optional: Run in CLI mode (PowerShell)

```powershell
./installer-windows-x86_64-vX.X.X.exe --headless --list-versions
./installer-windows-x86_64-vX.X.X.exe --headless --install
./installer-windows-x86_64-vX.X.X.exe --headless --uninstall
```

Use `--path "C:\path\to\TIDAL\resources"` to target a custom installation path.
