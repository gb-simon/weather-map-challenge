# Weather Map Challenge

Live Demo: www.gonzaloweather.netlify.com

I used **yarn** to manage the packages

`yarn install` to add the necessary dependencies

`yarn test` to run the app test cases

`yarn start` to run the app

I made this app with React, used the template TypeScript, and for the styles I used Material UI.

The app is made of three components, the city selector at the top of the screen, and below the user can see the other two, one next to the other, the weather information, and the weather description.

I wanted to create a minimalist app, I thought about what I want every time I use a weather app in my daily life, well I just see the temp weather, and maybe some days I check the minimum and the maximum if I'll spend the day off home. So I thought I’d just show the most necessary points for the user to have a better experience.

This is what it looks like in the last version

![Screenshot from 2022-08-28 21-41-21.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a5b8be32-fe56-4426-9028-1ee4efb75ec3/Screenshot_from_2022-08-28_21-41-21.png)

As you can see, there are just three components, the selector, the weather info, and the weather description at the left. It works on every screen, no matter the size, this first picture was taken on a screen 3286x1080. This is how it looks on a 1366 \* 768 screen

![Screenshot from 2022-08-28 21-42-29.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e6375b05-0f27-4382-af6f-8b026803b346/Screenshot_from_2022-08-28_21-42-29.png)

And the responsive site:

![Screenshot from 2022-08-28 21-41-40.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/649b3850-71cc-4652-b49e-dcb971bf289c/Screenshot_from_2022-08-28_21-41-40.png)

To manage the versions I used git, with Github.

For testing the app I used the testing react library, written wth typescript, I tested the app, making the focus on the most important function which is to show the city and the city info.

```tsx
test("the selector renders the city the user picked", async () => {
  render(<App />);
  await UserEvent.click(getByRole(screen.getByTestId("city"), "button"));
  waitFor(() => UserEvent.click(screen.getByText("Paris")));
  expect(screen.getByText("Paris"));
});
```

And here you can see all the tests passed!

![Screenshot from 2022-08-28 21-45-39.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/465a2969-e319-4e86-9849-4113d14ccddc/Screenshot_from_2022-08-28_21-45-39.png)

I build the app on Netlify, this is a site I used for deploying also my other projects, which you can check on my website!

Here is the link to the app running: www.gonzaloweather.netlify.com
