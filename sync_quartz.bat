@echo off
echo Executing npx quartz sync...
npx quartz sync

if %errorlevel% equ 0 (
    echo Command executed successfully
) else (
    echo Error: Command execution failed
)

pause
    