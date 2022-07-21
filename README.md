

# User Creation Form  &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)
>

### Custom designed user registration form 

![](https://assets.codepen.io/1712078/ezgif-2-0e820bef10.gif)

### User Features 

- Form Input Validation 
- Popout notification to give you feedback on the success of the form submission 
- Reset Input 


### Local Development Set Up 

Please use the ```yarn``` to install the dependencies. 
```shell 
yarn install 
```
The project was created using [Vite](https://vitejs.dev/guide/). It is known for its lightweight depdendencies management. 

### Starting the development server 

```shell
yarn run dev 
```

You will see the following output in your terminal. 
```shell
vite v2.9.14 dev server running at:

  > Local: http://localhost:3000/
  > Network: use `--host` to expose

  ready in 965ms.
```

next, open your browser and visit ```http://localhost:3000/```

### Project Structure 

  🗄️src
  - App.tsx 
  - AppTest.spec.tsx 

  🗄️api 
  - agent.ts 

  🗄️mock-apis 
   - api.ts 
   - handlers.ts
   - server.ts 
  
  🗄️ componenents
  - 🗄️forms
      - user-creation-wizard-logic.tsx
      - user-creation-wizard-view.tsx 

    

### Warning! 

The project currently does not have live endpoint API. Instead, it is running on Mock Service Worker for browsers that intercepts actual requests on the network level. 
Thus, the data you see are all mocked and feedback you get from the form is also mocked as well. 

### Run Tests

```shell
yarn test 
```

The test has been integrated with MSW which is an API mocking server which works by intercepting requests on the network level. 

Moreover, the test is integrated with ```react-testing-library``` which its use is constrained by design towards testing what the user sees which makes our tests decoupled from the implementation. (IOW, refactoring how you code something shoulnd't break tests); 

The following scenarios have been tested. Please open [AppTest.spec.tsx](https://github.com/gtaing1/Small-World-For-Gigi/blob/main/src/AppTest.spec.tsx) for detailed implementation of the test scenarios:

- The form's two dropdown select options which are State & Job Functions are fetched from the production endpoint. Scenario testing whether two two dropdown would get populated. 

  Test Suite: "Can render data"
    - Test Case: "should recieve data GET successfully"  ✅
    - Test Case: "should display React Toastify error when GET fails" ✅

  Test Suite: "Form display"
    - Test Case: "Form State Select Dropdown Has 3 options" ✅
    - Test Case: "Form Job Functions Select Dropdown Has 4 options"   ✅

-  The form's ability to submit data 

    - Test Suite: "Form Submit" ✅
    - Test Case: "use can submit form" ✅
