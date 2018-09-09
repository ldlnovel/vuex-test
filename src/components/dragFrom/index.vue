<template>
	<div class="dragFrom">
		<div 
			v-for="item in fromlistArr" 
			:key="item.key" 
			:style="{background:item.color}"
			draggable="true"
			@dragstart="startDrage($event,item)"
			@dragover="endDrage($event,item)"
			@drop="drop($event,item)"
		>
			{{item.name}}
		</div>
	</div>
	
</template>

<script>
	export default {
		name:'dragFrom',
		data() {
			return {
				fromlistArr:[
					{name:'第一个盒子', key:'one', color: 'red'},
					{name:'第二个盒子', key:'tow', color: 'black'},
					{name:'第二个盒子', key:'ss', color: 'white'},
					{name:'第二个盒子', key:'aa', color: 'yellow'},
					{name:'第二个盒子', key:'dd', color: 'green'},
				],
				oldKey:''
			}
		},
		updated() {
			console.log('=====================================')
		},
		methods: {
			startDrage(event,value) {
				let _fromlistArr = this.fromlistArr
				for (let i = 0; i <_fromlistArr.length; i++) {			
					if(_fromlistArr[i].key == value.key) {
						let oldKey =  {
							name:_fromlistArr[i].name,
							key:_fromlistArr[i].key,
							color:_fromlistArr[i].color,
						} 
						this.oldKey = oldKey
						break;
					}
				}
			},
			endDrage(event) {
				event.preventDefault();
			},
			drop(event,value) {
				event.preventDefault();
				let _oldKey = this.oldKey
				if(this.oldKey.key == value.key) return
				console.log('=========this.fromlistArr=======DROP====================')
				let _fromlistArr = this.fromlistArr
				let _oldKeyIndex = 0;
				let _valueKeyIndex = 0;
				for (let i = 0; i <_fromlistArr.length; i++) {
					if(_fromlistArr[i].key == _oldKey.key) {
						_oldKeyIndex = i
					}
					if(_fromlistArr[i].key == value.key) {
						_valueKeyIndex = i
					}
				}
				for (let i = 0; i <_fromlistArr.length; i++) {
					if(_fromlistArr[i].key == _oldKey.key) {
						_fromlistArr.splice(i,1)
						break;
					}
				}
				for (let i = 0; i <_fromlistArr.length; i++) {
					if(_fromlistArr[i].key == value.key) {
						 _fromlistArr.splice(_oldKeyIndex > _valueKeyIndex?i:i+1,0,_oldKey)
						 break;
					}
				}
				this.fromlistArr = _fromlistArr
			}
		}
	}
</script>

<style scoped>
.dragFrom{
	display: flex;
	
}
.dragFrom > div{
	height: 100px;
	width: 100px;
}
</style>