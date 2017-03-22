#!/bin/sh
git add .
git status
echo "input commit comments:"
read comments
if [[ $comments ]]; then
    echo $comments
else
    exit 1
fi
echo "push to github now ? (y/n)"
read flag
if [[ $flag == "y" ]]; then
    echo "yes"
elif [[ $flag == "n" ]]; then
    echo "no"
else
    echo "other"
fi
