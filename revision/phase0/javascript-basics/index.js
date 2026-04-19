// // async - await
// async function fetchData() {
//     try {
//         // simulated api response
//         const response = await Promise.resolve({
//             json: async () => ({
//                 userId: 1,
//                 id: 1,
//                 title: "Sample Post",
//                 body: "This is mock data",
//             })
//         });
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching data: ", error)
//     }
// }

// fetchData();

// async function fetchUserDetails() {
//     try {
//         const response = await Promise.resolve({
//             json: async () => ({
//                 userName: "Aagosh",
//                 userAge: 20,
//                 userRole: "AI Master",
//                 body: "This is mock data"
//             })
//         })
//         const data = await response.json();
//         console.log(data);

//     } catch (error) {
//         console.error("The error identified is: ", error)
//     }
// }

// fetchUserDetails();

// async function fetchAPI() {
//     try {
//         setTimeout(async () => {
//             const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//             const data = await response.json();
//             console.log(data);
//         }, 2000);
//         console.log("data coming soon..")
//     } catch (error) {
//         console.error("The error is : ", error)
//     }
// }

// fetchAPI();

// async function displayInfo() {
//     try {
//         setTimeout(async () => {
//             const response = await fetch('https://meowfacts.herokuapp.com/');
//             const data = await response.json();
//             console.log(data.data[0])
//         }, 2000);
//         console.log("data coming soon..")
//     } catch (error) {
//         console.error("The error is: ", error)
//     }
// }

// displayInfo();
