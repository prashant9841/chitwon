<template>
	<div>
		<div class="messageForm">
		<h3> Leave us a message </h3>
			<el-form v-model="messageData">
				<el-form-item>
				<el-row :gutter="40">
				<el-col :span="12">
					<el-form-item>
					<input type="text" v-model="messageData.name" class="el-input__inner" placeholder="Name" />
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item>
					<input type="text" v-model="messageData.email" class="el-input__inner" placeholder="E-mail Address" />
					</el-form-item>
				</el-col>
				</el-row>		
				</el-form-item>
				<el-form-item>
					<textarea rows="3" class="el-textarea__inner" placeholder="Message about tiger encounter" v-model="messageData.message"></textarea>
				</el-form-item>
				<el-form-item align="right">
					<el-button type="primary" @click="addMessage(messageData)">Leave Message</el-button>
				</el-form-item>
			</el-form>

		</div>

	<h3> Messages ({{ messageData.length }}) </h3>
		<div class="MessagesWrapper">
			<span v-for="item in messageData">
			<div class="messageDiv">
				<h3> Name: {{ item.name }} </h3>
				<h4> E-mail: <label class="mail"> {{ item.email }} </label> </h4>
				<p> {{ item.message }} </p>
			</div>
			</span>
		</div>
	
	</div>
</template>
<script>
	export default{
		data: function(){
			return{
				messageCOunt: '',
				messageData: [
					{
						name: 'santosh',
						email: 'student@gmail.com',
						message: 'comments'
					},
					{
						name: 'santosh',
						email: 'student@gmail.com',
						message: 'comments'
					}
				]
			}
		},
		methods: {
			addMessage: function(formname){
				this.messageData.push({name: formname.name, email: formname.email, comment: formname.message});
			}
		}
	}
</script>