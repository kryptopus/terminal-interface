/* @flow */
import type {BundleInterface} from "solfegejs-application/src/BundleInterface"
import type {ContainerConfiguratorBundleInterface} from "solfegejs-dependency-injection/interface"
import type Container from "solfegejs-dependency-injection/src/ServiceContainer/Container"
import RegisterBodyCompilerPass from "./infrastructure/dependencyInjection/compiler/RegisterBodyCompilerPass"

/**
 * Terminal interface bundle
 */
export default class Bundle implements BundleInterface, ContainerConfiguratorBundleInterface
{
    /**
     * Get bundle path
     *
     * @return  {String}        The bundle path
     */
    getPath():string
    {
        return __dirname;
    }

    /**
     * Configure service container
     *
     * @param   {Container}     container       Service container
     */
    configureContainer(container:any):void
    {
        container.addCompilerPass(new RegisterBodyCompilerPass());
    }
}
