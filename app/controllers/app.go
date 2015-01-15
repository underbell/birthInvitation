package controllers

import (
	"fmt"
	"github.com/revel/revel"
	"io/ioutil"
)

type App struct {
	*revel.Controller
}

func (c App) Index() revel.Result {
	files := getFileNames()
	fmt.Println(files)
	for i := 0; i < len(files); i++ {
		fmt.Println(files[i])
	}
	return c.Render(files)
}

func getFileNames() []string {
	var fileNames []string
	files, _ := ioutil.ReadDir("/home/ec2-user/gocode/src/birthInvitation/public/img/photo/gallery")
	for _, f := range files {
		fileNames = append(fileNames, f.Name())
	}
	return fileNames
}
