RED='\033[0;31m';
BRANCH=$(git symbolic-ref --short HEAD);
if [ "$BRANCH" = "prod" ];
then
  COMMIT=$(git subtree split --prefix dist); git push heroku $COMMIT:master --force
else
  echo "${RED}Wrong branch. Please deploy from 'prod', you are now on '$BRANCH' ${NC}"
fi
