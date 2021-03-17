const { v4: uuidv4 } = require('uuid')

let users = [
	{id: 1, name:'utinchindy', email: 'utincindyselvira16@gmail.com'},
	{id: 2, name: 'doraemon', email: 'doraemon@gmail.com'}
]
module.exports = {
	index : function(request, response){
		response.render('pages/user/index', {users})
		
	},
	create: function(request, response) {
		response.render('pages/user/create')
	},
	store: function(request, response){
		users.push({
			id: uuidv4() ,
			name: request.body.name,
			email:  request.body.email,

		})

		response.send(users)
	},
	update: function(request, response){
	const id = request.params.id
	users.filter(user => {
		if(user.id == id) {
			user.id = id
			user.name = request.body.name
			user.email = request.body.email

			return user
		}
	})
	response.json({
	status: true,
	data: users,
	message: 'Data users berhasil diedit',
	method: request.method,
	url: request.url
	})
},
	delete: function(request, response){
	let id = request.params.userId
	user = user.filter(user => user.id != id)
	response.send({
	status: true,
	data: users,
	message: 'Data users berhasil dihapus',
	method: request.method,
	url: request.url	
	})
	}
}