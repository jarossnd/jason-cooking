# jason.cooking

## Overview

This repro contains the jason.cooking website. It is a simple recipe website for family and friends to visit.

## Notes

### Arch Linux

Here are some notes to get started on Arch Linux

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

cd /home/jason/.config/zsh

nvim .zshrc

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

Restart terminal

nvm use 19.9.0

git clone https://github.com/jarossnd/jason-cooking

npm install
