<template>
    <div class="welcome">
        <el-row :gutter="20">
        	<bread-crumb></bread-crumb>
        	<h2>dashboard</h2>
        	<el-col :span="8">
        		<el-card class="box-card">
					<h4>Pages</h4>
					<li><a href="#">About Us</a></li>
					<li><a href="#">About Us</a></li>
					<li><a href="#">About Us</a></li>
					<li><a href="#">About </a></li>
				</el-card>
        	</el-col>
        	<el-col :span="8">
        		<el-card class="box-card">
					<h4>Facts</h4>
					<li><a href="#">About Us</a></li>
					<li><a href="#">About Us</a></li>
					<li><a href="#">About Us</a></li>
					<li><a href="#">About </a></li>
				</el-card>
        	</el-col>
        	<el-col :span="8">
        		<el-card class="box-card">
					<h4>Packages</h4>
					<li><a href="#">About Us</a></li>
					<li><a href="#">About Us</a></li>
					<li><a href="#">About Us</a></li>
					<li><a href="#">About </a></li>
				</el-card>
        	</el-col>
        </el-row>
        <el-row :gutter="20" class="small-boxes">
        	
        	<el-col :span="6">
        		<el-card class="box-card">
					<a href="#">FAQs</a>
				</el-card>
        	</el-col>
        	<el-col :span="6">
        		<el-card class="box-card">
					<a href="#">Contact Details</a>
				</el-card>
        	</el-col>
        	<el-col :span="6">
        		<el-card class="box-card">
					<a href="#">Social Media Links</a>
				</el-card>
        	</el-col>
        	<el-col :span="6">
        		<el-card class="box-card">
					<a href="#">Testimonials</a>
				</el-card>
        	</el-col>
        </el-row>
    </div>
</template>

