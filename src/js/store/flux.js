const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			items: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

			getItemById: async (category, id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/${category}/${id}`);
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					const data = await response.json();
					return data.result.properties;
				} catch (error) {
					console.error('Error fetching item by ID:', error);
					return null;
				}
			},

			// Use getActions to call a function within a function
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
