<template>
<div>
<h3>Frequently Asked Question</h3>
	<el-collapse v-model="activeName" accordion v-for="(item, name) in faqData">
	  <el-collapse-item :title="item.questionTitle">
	    <div>
	    	{{ item.answer }}
	    </div>
	  </el-collapse-item>
	</el-collapse>
</div>
</template>
<script>
	export default{
		data: function(){
			return{
				activeName: '1',
				faqData: [
					{
						questionTitle: 'What is Tiger Encounter?',
						answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dolorem fugiat dolore praesentium officia. Vero nulla, porro ex tempore inventore quis itaque officiis esse totam architecto quaerat maiores atque autem aperiam possimus, iste, ad officia, expedita eos. Ipsam fugiat corporis in nobis delectus nesciunt magni ut nisi consectetur. Sunt in placeat, alias laudantium ab, maxime.'
					},
					{
						questionTitle: 'What does it do?',
						answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dolorem fugiat dolore praesentium officia. Vero nulla, porro ex tempore inventore quis itaque officiis esse totam architecto quaerat maiores atque autem aperiam possimus, iste, ad officia, expedita eos. Ipsam fugiat corporis in nobis delectus nesciunt magni ut nisi consectetur. Sunt in placeat, alias laudantium ab, maxime.'
					},
					{
						questionTitle: 'Does it helps to protect the number of tigers in Nepal?',
						answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dolorem fugiat dolore praesentium officia. Vero nulla, porro ex tempore inventore quis itaque officiis esse totam architecto quaerat maiores atque autem aperiam possimus, iste, ad officia, expedita eos. Ipsam fugiat corporis in nobis delectus nesciunt magni ut nisi consectetur. Sunt in placeat, alias laudantium ab, maxime.'
					}
				]

			}
		}
	}
</script>