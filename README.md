# Socialist-Utility-Bot


![Socialism](https://www.independent.org/images/article_featured/2020/socialism_flag_1200x675.png)


A all in 1 tool modular bot for socialist users

Prefix: *


# Features:
Moderation Tools with Warn (persistent), Mute(comming soon) Kick, Ban, Modmail etc etc.

Utility tools such as a giveaway module, calculator, tax and heist sharing calc (for dank memer bot), membermail, remind, lock/unlock channel and more

currency commands built under quickdb [persistent database], if u are an experienced bot coder u can even change the stuff!

fun commands,

And much more! Type `*help` to get a full list of available commands

Blacklisted word filter (manual rn so gotta make it a feature where u can add and remove bl words like quickdb)

# Installation

This bot is written to run on top of node.js. Please see https://nodejs.org/en/download/

Once you have NodeJS installed, running `npm install` from the bot directory should install all required packages. If this command prints errors, the bot probably won't work!



## Windows Users
Please note that you must have a working C compiler and Python in your path for
`npm install` to work. The bot has been tested to work on Windows using Visual Studio 2015 Community and Python 2.7, except for `!pullanddeploy`.
* [Installing Node on Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)
* [npm errors on Windows](http://stackoverflow.com/questions/21365714/nodejs-error-installing-with-npm)
* [Visual Studio Community 2015](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx)
* [Python 2.7](https://www.python.org/downloads/)



Before the first run you will need to create an `.env` file. A bot token will be required for this step. 

To start the bot just run
`node bot.js`.

# FAQ
1) Module is not found

you likely need to update the node modules, try doing `npm install`, `npm update` or `npm install [the missing module]`

2) cmd.run is not defined.

Its a huge bug that i will fix after my exams so yea.


# Updates
If you update the bot, please run `npm update` before starting it again. If you have
issues with this, you can try deleting your node_modules folder and then running
`npm install` again. Please see [Installation](#Installation).

# TODO:
add mute command

cleanup code and remove unnecessary components

add more logging features

add a better read.md

make a webpage

optimise currency commands on quickdb

Message on user leave

add more fun commands

update help command

remove unnecessary commands

optimise some commands to be compatible with the current command handler

create a bat file to launch the bot

# Help
Please check the GitHub issues page on this project. We get a lot of similar questions, and it is likely that yours has already been answered. And yes, prob need to roll those into an official FAQ.

If you still need help, feel free to join us on [discord.](https://discord.gg/RzRhBCq)

[![Run on Repl.it](https://repl.it/badge/github/CaesiumSG/Socialist-Utility-Bot)](https://repl.it/github/CaesiumSG/Socialist-Utility-Bot)