#!/bin/sh
git add .
FLAG=$(git status | grep "nothing to commit, working tree clean")
if [[ $FLAG ]]; then
    echo $FLAG
    exit 0
else
    git status
fi

read -p "input commit comments: " comments
if [[ $comments ]]; then
    echo $comments
    git commit -m $comments
else
    exit 1
fi

read -p "push to origin " branch
if [[ $branch ]]; then
    echo "pushing to origin $branch ..."
    git push -u origin $branch
else
    echo "canceled push"
    exit 0
fi
