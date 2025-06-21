const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootm55rv/",
            name: "springbootm55rv",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootm55rv/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "java学习平台"
        } 
    }
}
export default base
