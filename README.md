# Weather Map Challenge

[Live Demo](www.gonzaloweather.netlify.com)

I used **yarn** to manage the packages

`yarn install` to add the necessary dependencies

`yarn test` to run the app test cases

`yarn start` to run the app

I made this app with React, used the template TypeScript, and for the styles I used Material UI. The app is made of three components, the city selector at the top of the screen, and below the user can see the other two, one next to the other, the weather information, and the weather description.

I wanted to create a minimalist app, I thought about what I want every time I use a weather app in my daily life, well I just see the temp weather, and maybe some days I check the minimum and the maximum if I'll spend the day off home. So I thought I’d just show the most necessary points for the user to have a better experience.

This is what it looks like in the last version
![bigscreen](https://i.imgur.com/FePPCqO.png)

As you can see, there are just three components, the selector, the weather info, and the weather description at the left. It works on every screen, no matter the size, this first picture was taken on a screen 3286x1080. This is how it looks on a 1366 \* 768 screen
![normalscreen](https://i.imgur.com/D9H06xH.png)

And the responsive site:
![responsivescreen](https://i.imgur.com/Sb6Da20.png)

To manage the versions I used git, with Github. The data was taken from the API of [Open Weather Map](https://openweathermap.org/). For testing the app I used the testing react library/jest, written wth typescript, I tested the app, making the focus on the most important function which is to show the city and the city info.

```tsx
test("the selector renders the city the user picked", async () => {
  render(<App />);
  await UserEvent.click(getByRole(screen.getByTestId("city"), "button"));
  waitFor(() => UserEvent.click(screen.getByText("Paris")));
  expect(screen.getByText("Paris"));
});
```

And here you can see all the tests passed!

![testcases](https://i.imgur.com/GMqTr74.png)

I build the app on Netlify, this is a site I used for deploying also my other projects, which you can check on my website!

[Here is the link to the app running](www.gonzaloweather.netlify.com)
