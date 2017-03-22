#!/bin/sh
git add .
FLAG=$(git status | grep "nothing to commit, working tree clean")
if [[ $FLAG ]]; then
    git status
    exit 0
else
    git status
fi

read -p "input commit comments: " comments
if [[ $comments ]]; then
    echo $comments
    git commit -m "$comments"
else
    exit 1
fi

read -p "push to origin " branch
if [[ $branch ]]; then
    CURRENT_BRANCH=$(git branch | grep -E '^\*\s\w+')
    if [[ $CURRENT_BRANCH != $branch ]]; then
        read -p "current branch is $CURRENT_BRANCH , do you want to push to $branch ? (y/n)" CONTINUE
        if [[ $CONTINUE == "y" ]]; then
            git push origin $branch
            exit 0
        else
            echo "canceled push"
            exit 0
        fi
    else
        echo "pushing to origin $CURRENT_BRANCH ..."
        git push -u origin $CURRENT_BRANCH
        exit 0
    fi
else
    echo "canceled push"
    exit 0
fi
