<style scoped lang='stylus'>
	.albumPage{
		position: fixed;top: 0;left: 0;background: #fff;
		width: 100%;z-index: 1;
		.header{
			position: relative;
			overflow: hidden;
			color: #fff;
			.albumBg{
				width: 100%;float: left;
			}
			header{
				width: 100%;height: 50px;text-align: center;line-height: 50px;font-size: 20px;
				.goback{
					width: 50px;height: 50px;top: 0;left: 0;
					font-size: 26px;text-align: center;line-height: 50px;
				}
			}
			.album_detail{
				width: 100%;padding: 0 3.6%;padding-top: 3.6%;color: #fff;
				.albumImage{
					width: 36.5%;
					img{
						width: 100%;
					}
				}
				.albumDetail{
					width: 63.5%;
					padding-left: 7%;
					padding-top: 3.6%;
					.singerAlbum{
						line-height: 28px;
					}
					.singerImg_singer{
						height: 36px;line-height: 36px;margin-top: 10px;
						img{
							width: 36px;height: 36px;border-radius: 50%;
						}
						.singer{
							color: rgba(255,255,255,0.7);
							padding-left: 10px;font-size: 14px;
						}
					}
				}
			}
			.icont{
				height: 50px;width: 90%; color: #fff;
				margin: 15px auto;
				ul{
					li{
						float: left;width: 25%;
						height: 50px;line-height: 50px;font-size: 30px;text-align: center;
					}
				}
			}
		}
		.albumList{
			ul{
				overflow-y: scroll;
			}
			li.cur{
				color: #c20c0c;
				.musicName{
					color: #c20c0c;
				}
				.musicSinger{
					color: #c20c0c;
				}

			}
			div.index{
				width: 50px;line-height: 50px;text-align: center;
			}
			div{
				height: 50px;
				.musicName{
					color: #4b4c4d;height: 25px;line-height: 25px;
					/*下面4句话是 超出部分显示...*/
					overflow: hidden;
					display: -webkit-box;
					/*显示一行*/
			        -webkit-line-clamp: 1;
			        -webkit-box-orient: vertical;
				}
				.musicSinger{
					color: #888;font-size: 12px;height: 25px;line-height: 25px;
				}
			}
			.icon-bofang{
				font-size: 28px;line-height: 50px;height: 50px;width: 50px;text-align: center;
			}
		}
	}
</style>
<template>
	<div class="albumPage" v-height>
		<div class="header" :style="{background:`url(${album.albumBG}) 0 0 /100% 100% no-repeat`}">
			<header class="por">
				{{album.albumTitle}}
				<span class="goback poa iconfont icon-houtui1" @click="goBack"></span>
			</header>
			<div class="album_detail ovh">
				<div class="albumImage fl">
					<img :src="album.albumImage">
				</div>
				<div class="albumDetail fl">
					<p class="singerAlbum">{{album.albumTitle}}</p>
					<p class="singerImg_singer ovh">
						<img :src="album.albumImage" alt="" class="singerImg fl">
						<span class="singer fl">{{album.albumSinger}}</span>
					</p>
				</div>
			</div>
			<div class="icont">
				<ul class="ovh">
					<li class="iconfont icon-addfile"></li>
					<li class="iconfont icon-BAI-pinglun"></li>
					<li class="iconfont icon-fenxiang1"></li>
					<li class="iconfont icon-icon--"></li>
				</ul>
			</div>
		</div>
		<div class="albumList">
			<ul v-albumList>
				<li v-for="(item, index) in album.albumList" class="ovh" @click="playaudio(album.albumList, index)" :class="{cur : index == playerIndex && albumIndex == $store.state.player.albumIndex}">
					<div class="fl index">{{index + 1}}</div>
					<div class="fl" v-width="100">
						<p class="musicName">{{item.musicName}}</p>
						<p class="musicSinger">{{item.musicSinger}}</p>
					</div>
					<span class="iconfont icon-bofang fr"></span>
				</li>
			</ul>

		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		computed:{
			album(){
				return this.$store.state.album
			},
			playerIndex(){
				return this.$store.state.player.index
			},
			albumIndex(){
				return this.$store.state.index
			}
		},
		methods:{
			goBack(){
				this.$store.commit("SHOWORHIDEALBUM",{
					isShowAlbum:false
				})
			},
			playaudio(album, index){ 
				this.$store.commit("PLAYAUDIO",{
					isShowPlayer : true,
					album:album,
					index:index,
					playerbg:this.album.playerbg,
					albumImage:this.album.albumImage,
					albumIndex : this.albumIndex
				});
			}
		}
	}
</script>