PROBLEMS: description of problem
  fix: summary of fix logic;
    example: code instructions

props were not updating when redux store had already been updated
  -- fix was > apparently I was mutating the original state and returning that instead I should be 
  returning new completely new object as new store state.   -coke
      --solution -> use Object.assign({}, oldState) remember to use {}; This is one way to solve this;

problem with handling leave. Seems to be not invoking handleLeave() when it's a refresh.
  -a tag vs li tag --> a tags refresh while li tag doesn't, when App refreshes it takes a while to retrieve state from firebase and so we have null?